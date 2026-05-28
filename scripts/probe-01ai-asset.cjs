const file = process.argv[2];
const candidates = [
  `https://www.01ai.uz/${file}`,
  `https://www.01ai.uz/uploads/${file}`,
  `https://www.01ai.uz/images/${file}`,
  `https://www.01ai.uz/storage/${file}`,
  `https://api.01ai.uz/uploads/${file}`,
  `https://api.01ai.uz/${file}`
];

(async () => {
  for (const url of candidates) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      console.log(response.status, response.headers.get("content-type"), url);
    } catch (error) {
      console.log("ERR", url, error.message);
    }
  }
})();
