import fs from "fs";
import path from "path";

const pagckage = fs.readFileSync(
  path.join(__dirname, "../package.json"),
  "utf-8"
);
console.log(pagckage);
