const { spawnSync } = require("node:child_process");
const { existsSync } = require("node:fs");
const path = require("node:path");

const [day] = process.argv.slice(2);

const dayExists = existsSync(`src/day${day}`);
if (!dayExists) {
  console.log(`Day ${day} does not exist`);
  process.exit(1);
}

const filePath = path.resolve(`src/day${day}/index.ts`);

console.log("file path", filePath);

const result = spawnSync("ts-node-dev", ["--respawn", filePath], {
  stdio: "inherit",
  encoding: "utf-8",
  shell: true,
});

if (result.status !== 0) {
  console.log(result.stderr);
  process.exit(1);
}
