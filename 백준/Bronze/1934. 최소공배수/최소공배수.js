const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const T = Number(input[0]); 

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(lcm(A, B));
}
