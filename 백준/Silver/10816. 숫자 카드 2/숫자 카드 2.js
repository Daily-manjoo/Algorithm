let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]); //상근이가 가진 카드의 개수
let cards = input[1].split(" ").map(Number); //상근이가 가진 카드 목록
let m = parseInt(input[2]); //확인할 숫자 개수
let queries = input[3].split(" ").map(Number); //확인할 숫자 목록

// 카드 개수를 저장할 Map 생성
let cardCount = new Map();
for (let card of cards) {
  cardCount.set(card, (cardCount.get(card) || 0) + 1);
}

let result = queries.map(query => cardCount.get(query) || 0);

console.log(result.join(" "));
