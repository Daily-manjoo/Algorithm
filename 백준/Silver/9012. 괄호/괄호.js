const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

const results = [];

for (let i = 1; i <= T; i++) {
  const line = input[i];
  const stack = [];
  let isVPS = true;

  for (const char of line) {
    if (char === "(") {
      stack.push(char); 
    } else if (char === ")") {
      if (stack.length === 0) {
        isVPS = false; 
        break;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) isVPS = false;

  results.push(isVPS ? "YES" : "NO");
}


console.log(results.join("\n"));
