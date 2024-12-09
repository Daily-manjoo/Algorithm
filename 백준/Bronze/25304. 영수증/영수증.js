const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//수증에 적힌 총 금액
const X = Number(input[0]);

//구매한 물건의 종류 수
const N = Number(input[1]);

//각 물건의 가격(a)과 개수(b)
let calculatedTotal = 0;
for (let i = 2; i < 2 + N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  calculatedTotal += a * b; 
}

if (calculatedTotal === X) {
  console.log("Yes");
} else {
  console.log("No");
}
