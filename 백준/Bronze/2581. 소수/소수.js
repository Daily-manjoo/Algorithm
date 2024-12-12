const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

// 에라토스테네스의 체
const sieve = Array(N + 1).fill(true); // 소수 여부 저장
sieve[0] = sieve[1] = false; // 0과 1은 소수가 아니니까

for (let i = 2; i * i <= N; i++) {
  if (sieve[i]) {
    for (let j = i * i; j <= N; j += i) {
      sieve[j] = false; // i의 배수들은 소수가 아님
    }
  }
}

// M 이상 N 이하의 소수 필터링
const primes = [];
for (let i = M; i <= N; i++) {
  if (sieve[i]) primes.push(i);
}

if (primes.length === 0) {
  console.log(-1); // 소수가 없으면 -1
} else {
  const sum = primes.reduce((a, b) => a + b, 0); // 소수의 합
  const min = Math.min(...primes); // 가장 작은 소수
  console.log(sum);
  console.log(min);
}
