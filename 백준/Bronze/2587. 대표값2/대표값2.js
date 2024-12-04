let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//  숫자 배열로 변환
let numbers = input.map(Number);

// 평균
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
let average = Math.floor(sum / numbers.length); // 정수 평균

// 중앙값
numbers.sort((a, b) => a - b);
let median = numbers[Math.floor(numbers.length / 2)];

console.log(average); 
console.log(median); 