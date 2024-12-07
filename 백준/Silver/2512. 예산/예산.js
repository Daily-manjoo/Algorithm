let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]); //지방의 수
let arr = input[1].split(" ").map(Number); //각 지방이 요청한 예산
let m = Number(input[2]); //총 예산

let start = 1; //이진탐색시 시작점과 끝점 생성
let end = arr.reduce((a, b) => Math.max(a, b)); //배열의 최대값
let result = 0; //상한액 초기설정

while (start <= end) {
  //최대값이 적을 시 탐색값이 없음
  let mid = parseInt((start + end) / 2); //중간값(상한액)
  let total = 0; //총 배정 예산 초기 설정

  for (let x of arr) {
    total = total + Math.min(mid, x); //요청 금액과 상환액 중 더 작은 값 배정
  }

  if (total <= m) {
    //총 배정금액이 예산한도 안일때
    result = mid; //현재 상한액 저장
    start = mid + 1; //상한액을 더 높일 수 있으니까 범위를 위로 올림
  } else {
    //총 배정 금액이 예산 한도 초과일때는
    end = mid - 1; //상한액 범위를 아래로 내림
  }
}

console.log(result);
