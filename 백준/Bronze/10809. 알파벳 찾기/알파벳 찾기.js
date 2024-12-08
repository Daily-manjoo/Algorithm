const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

//문자 배열 생성
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 결과 저장 배열
let result = [];

// 각 알파벳 첫 등장 위치
for (let char of alphabet) {
  result.push(input.indexOf(char)); // indexOf로 첫 등장 위치 찾기
}

console.log(result.join(" "));
