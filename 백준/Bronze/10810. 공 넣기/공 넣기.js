const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//바구니의 개수 N 작업 수 M
const [N, M] = input[0].split(" ").map(Number);

// 바구니 초기화
const baskets = Array(N).fill(0);

for (let t = 1; t <= M; t++) {
  const [i, j, k] = input[t].split(" ").map(Number);
  // i번부터 j번 바구니에 공 번호 k를 넣기
  for (let b = i - 1; b < j; b++) {
    baskets[b] = k;
  }
}

console.log(baskets.join(" "));
