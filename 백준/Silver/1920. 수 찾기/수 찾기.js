let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]); // A 배열의 크기
let a = new Set(input[1].split(" ").map(Number)); // A 배열의 값
let m = parseInt(input[2]); // 확인할 숫자 개수
let x = input[3].split(" ").map(Number); // 확인할 숫자 배열


let result = x.map(value => (a.has(value) ? 1 : 0));

console.log(result.join("\n"));