const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const parts = input.split("-");

let result = 0;

result += parts[0]
  .split("+")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

for (let i = 1; i < parts.length; i++) {
  const sum = parts[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  result -= sum;
}

console.log(result);
