import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.join(__dirname, "input.txt"), "utf8");

const columns = input.split("\n").map((line) =>
  line
    .split(/(\s+)/)
    .filter((e) => e.trim().length > 0)
    .map(Number)
);

const firstColumn = columns.map((column) => column[0]).sort();
const secondColumn = columns.map((column) => column[1]).sort();

let sum = 0;

for (let i = 0; i < firstColumn.length; i++) {
  const first = firstColumn[i];
  const second = secondColumn[i];
  const distance = Math.abs(first - second);
  sum += distance;
}

console.log(sum);
