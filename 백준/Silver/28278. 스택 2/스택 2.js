const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const output = [];

const N = Number(input[0]); 

for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");
  const type = Number(command[0]);

  if (type === 1) {
    stack.push(Number(command[1])); 
  } else if (type === 2) {
    output.push(stack.length > 0 ? stack.pop() : -1); 
  } else if (type === 3) {
    output.push(stack.length);
  } else if (type === 4) {
    output.push(stack.length === 0 ? 1 : 0);
  } else if (type === 5) {
    output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));
