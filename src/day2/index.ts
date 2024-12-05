import { readFileSync } from "fs";

const input = readFileSync("src/day2/input.txt", "utf8");

const rows = input.split("\n").map((line) =>
  line
    .split(" ")
    .filter((l) => l.trim().length > 0)
    .map(Number)
);

type State = "decrease" | "increase";

const isRowSafe = (row: number[]): boolean => {
  let state: State = "increase";
  let prevState: State | undefined;
  for (let i = 1; i < row.length; i++) {
    const prevValue = row[i - 1];
    const currValue = row[i];
    if (prevValue === currValue) {
      return false;
    }
    if (prevValue < currValue) {
      state = "increase";
    } else {
      state = "decrease";
    }

    if (prevState && prevState !== state) {
      return false;
    }
    prevState = state;
    const diff = Math.abs(prevValue - currValue);

    if (diff > 3) {
      return false;
    }
  }
  return true;
};

const safeLevels = rows
  .map((row) => {
    if (isRowSafe(row)) {
      return true;
    }
    for (let i = 0; i < row.length; i++) {
      const newRow = row.toSpliced(i, 1);
      if (isRowSafe(newRow)) {
        return true;
      }
    }
    return false;
  })
  .filter(Boolean).length;

console.log(safeLevels);
