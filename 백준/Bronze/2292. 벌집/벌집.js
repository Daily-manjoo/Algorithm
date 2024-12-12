const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (input === 1) {
  console.log(1);
  return;
}

let layer = 1;
let maxRoom = 1;

while (maxRoom < input) {
  maxRoom += 6 * layer; 
  layer++;
}

console.log(layer);
