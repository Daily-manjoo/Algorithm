const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lengths = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...lengths); 
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 0;

  for (const length of lengths) {
    count += Math.floor(length / mid);
  }

  if (count >= N) {
    result = mid; 
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
