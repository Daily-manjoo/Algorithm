let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]); // 첫 줄에 입력된 회원 수
let members = input.slice(1).map((line, index) => {
  let [age, name] = line.split(" ");
  return { age: parseInt(age), name: name, order: index };
});

// 나이 순, 가입 순으로 정렬
members.sort((a, b) => {
  if (a.age === b.age) {
    return a.order - b.order; // 가입 순서 기준 정렬
  }
  return a.age - b.age; // 나이 기준 정렬
});

members.forEach(member => {
  console.log(`${member.age} ${member.name}`);
});
