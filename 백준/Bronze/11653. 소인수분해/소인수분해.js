
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

if (N > 1) {
  primeFactorization(N);
}
function primeFactorization(N) {
  let result = [];

  for (let i = 2; i * i <= N; i++) {
    while (N % i === 0) {
      result.push(i);
      N = Math.floor(N / i);
    }
  }

  if (N > 1) {
    result.push(N);
  }
  console.log(result.join("\n"));
}
