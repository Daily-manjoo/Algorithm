let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number); //학생 수 N과 상 받을 학생 수 K
let scores = input[1].split(" ").map(Number); //학생들 점수 배열

scores.sort((a, b) => b - a);

let cutoff = scores[k - 1]; // 상 받을 K번째 학생 점수

console.log(cutoff);
