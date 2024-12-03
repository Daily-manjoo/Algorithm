let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])
let arr = [];

for(let i = 1; i <= n; i++){
  arr.push(Number(input[i]))
}

//오름차순으로
arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++){
  answer = answer+arr[i] + "\n";
}

console.log(answer);
 