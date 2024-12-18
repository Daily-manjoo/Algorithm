const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = Number(input[0]); 
const stack = [];

for (let i = 1; i <= K; i++) {
  const num = Number(input[i]);

  if (num === 0) {
    stack.pop();
  } else {

    stack.push(num);
  }
}

const result = stack.reduce((sum, value) => sum + value, 0);
console.log(result);
