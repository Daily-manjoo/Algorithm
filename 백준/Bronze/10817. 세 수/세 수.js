let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = input[0].split(" ").map(Number);

numbers.sort((a, b) => a - b); // 오름차순 정렬

// 두 번째로 큰 값
console.log(numbers[1]);