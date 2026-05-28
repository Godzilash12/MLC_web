const fs = require("fs");

const html = fs.readFileSync("tmp-01ai.html", "utf8");
const startMarker = '<script>self.__next_f.push([1,"18:';
const start = html.indexOf(startMarker);
if (start === -1) throw new Error("Partners payload not found");
const scriptStart = start + "<script>".length;
const scriptEnd = html.indexOf("</script>", scriptStart);
const script = html.slice(scriptStart, scriptEnd);
const match = script.match(/self\.__next_f\.push\(\[1,"([\s\S]*)"\]\)/);
if (!match) throw new Error("Could not capture Next payload string");
const payload = JSON.parse(`"${match[1]}"`);
const marker = '"partners":';
const partnersStart = payload.indexOf(marker) + marker.length;
let index = partnersStart;
let depth = 0;
let inString = false;
let escape = false;
let end = -1;
for (; index < payload.length; index += 1) {
  const char = payload[index];
  if (escape) {
    escape = false;
    continue;
  }
  if (char === "\\") {
    escape = true;
    continue;
  }
  if (char === '"') {
    inString = !inString;
    continue;
  }
  if (inString) continue;
  if (char === "[") depth += 1;
  if (char === "]") {
    depth -= 1;
    if (depth === 0) {
      end = index + 1;
      break;
    }
  }
}
if (end === -1) throw new Error("Could not balance partners array");
const partners = JSON.parse(payload.slice(partnersStart, end));
fs.mkdirSync("tmp", { recursive: true });
fs.writeFileSync("tmp/01ai-partners.json", JSON.stringify(partners, null, 2));
console.log(`Extracted ${partners.length} partners`);
