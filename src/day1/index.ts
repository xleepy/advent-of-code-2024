import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.join(__dirname, "input.txt"), "utf8");

const columns = input.split("\n").map((line) =>
  line
    .split(/(\s+)/)
    .filter((e) => e.trim().length > 0)
    .map(Number)
);

const firstColumn = columns.map((column) => column[0]);
const secondColumn = columns.map((column) => column[1]);

let sum = 0;

while (firstColumn.length > 0) {
  const firstMin = Math.min(...firstColumn);
  const secondMin = Math.min(...secondColumn);
  const distance = Math.abs(firstMin - secondMin);
  sum += distance;
  firstColumn.splice(firstColumn.indexOf(firstMin), 1);
  secondColumn.splice(secondColumn.indexOf(secondMin), 1);
}
