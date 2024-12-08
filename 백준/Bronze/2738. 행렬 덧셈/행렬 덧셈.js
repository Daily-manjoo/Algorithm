const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 첫 줄에서 행렬의 크기 N, M 읽기
const [N, M] = input[0].split(" ").map(Number);

// 행렬 A와 B 나누기
const A = input.slice(1, N + 1).map(line => line.split(" ").map(Number));
const B = input.slice(N + 1).map(line => line.split(" ").map(Number));

const result = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row);
}

result.forEach(row => console.log(row.join(" ")));
