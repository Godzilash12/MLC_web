const fs = require("fs");

const html = fs.readFileSync("tmp-01ai.html", "utf8");
const matches = [...html.matchAll(/src="(\/_next\/static\/chunks\/[^"]+\.js)"/g)].map((m) => m[1]);
const unique = [...new Set(matches)];
fs.mkdirSync("tmp/chunks", { recursive: true });

(async () => {
  for (const chunk of unique) {
    const url = `https://www.01ai.uz${chunk}`;
    const response = await fetch(url);
    const text = await response.text();
    const fileName = chunk.split("/").pop();
    fs.writeFileSync(`tmp/chunks/${fileName}`, text);
    console.log(`saved ${fileName} ${text.length}`);
  }
})();
