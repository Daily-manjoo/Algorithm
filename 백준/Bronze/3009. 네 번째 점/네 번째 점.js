
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let x = 0, y = 0;
for (const line of input) {
  const [px, py] = line.split(" ").map(Number);
  x ^= px; // x좌표 중복 제거
  y ^= py; // y좌표 중복 제거
}
console.log(`${x} ${y}`);
