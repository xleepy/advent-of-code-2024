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

const firstPart = () => {
  let sum = 0;

  for (let i = 0; i < firstColumn.length; i++) {
    const first = firstColumn[i];
    const second = secondColumn[i];
    const distance = Math.abs(first - second);
    sum += distance;
  }
  console.log("first part", sum);
};

firstPart();

const secondPart = () => {
  const occurrencesInRightColumn = secondColumn.reduce<Record<number, number>>(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {}
  );

  let sum = 0;
  for (const firstColumnValue of firstColumn) {
    sum += firstColumnValue * (occurrencesInRightColumn[firstColumnValue] || 0);
  }

  console.log("second part", sum);
};

secondPart();
