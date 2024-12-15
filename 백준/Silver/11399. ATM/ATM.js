const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);

P.sort((a, b) => a - b);

let total = 0; 
let sum = 0; 

for (const time of P) {
  sum += time; 
  total += sum;
}

console.log(total);
