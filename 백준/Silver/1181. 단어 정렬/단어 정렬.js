const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//단어 개수
const n = Number(input[0]);

//단어 리스트
const words = input.slice(1);

// 1. 중복 제거
const uniqueWords = [...new Set(words)];

// 2. 정렬: 길이 기준 → 길이가 같으면 사전순
uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : 1; // 길이가 같으면 사전순
  }
  return a.length - b.length; // 길이 기준 정렬
});

console.log(uniqueWords.join("\n"));