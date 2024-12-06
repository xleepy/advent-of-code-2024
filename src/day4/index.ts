import { readFileSync } from "fs";

const input = readFileSync("src/day4/test-input.txt", "utf8");

const rows = input.split("\n");

const firstPart = () => {
  let counter = 0;
  for (const row of rows) {
    const rowLength = row.length;
    for (let i = 0; i < rowLength; i++) {
      const chunk = row.substring(i, i + 4);
      const reversed = chunk.split("").reverse().join("");
      console.log(chunk);
      if (chunk === "XMAS" || reversed === "XMAS") {
        counter++;
      }
    }
  }

  return counter;
};

console.log(firstPart());
