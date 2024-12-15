const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number); 
const coins = input.slice(1, N + 1).map(Number).reverse();

let remaining = K;
let count = 0; 

for (const coin of coins) {
  if (remaining >= coin) {
    count += Math.floor(remaining / coin); 
    remaining %= coin;
  }
}

console.log(count);
