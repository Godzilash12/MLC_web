const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const INPUT_PATH = path.join(process.cwd(), "tmp", "01ai-partners.json");
const OUTPUT_DIR = path.join(process.cwd(), "public", "partners-avif");
const MEDIA_BASE = "https://maktab01-dev-files.s3.eu-north-1.amazonaws.com";

function toLocalName(fileName) {
  return `${fileName.replace(/\.[^.]+$/, "")}.avif`;
}

async function downloadAndConvert(fileName) {
  const outputName = toLocalName(fileName);
  const outputPath = path.join(OUTPUT_DIR, outputName);

  if (fs.existsSync(outputPath)) {
    return outputName;
  }

  const response = await fetch(`${MEDIA_BASE}/${fileName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileName}: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await sharp(buffer)
    .rotate()
    .avif({ quality: 68, effort: 7 })
    .toFile(outputPath);

  return outputName;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const partners = JSON.parse(fs.readFileSync(INPUT_PATH, "utf8"));
  const files = new Set();

  for (const partner of partners) {
    if (partner.logo) files.add(partner.logo);
    for (const block of partner.blocks || []) {
      if (block.type === "image_group") {
        for (const image of block.images || []) {
          files.add(image);
        }
      }
    }
  }

  const list = [...files];
  for (const fileName of list) {
    await downloadAndConvert(fileName);
    console.log(`done: ${fileName}`);
  }

  console.log(`converted ${list.length} files`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
