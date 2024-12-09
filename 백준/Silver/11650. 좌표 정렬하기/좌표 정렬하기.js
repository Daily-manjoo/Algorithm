const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const points = input.slice(1).map(line => line.split(" ").map(Number));

points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; // x좌표가 같으면 y좌표 기준으로 오름차순
  }
  return a[0] - b[0]; // x좌표 기준으로 오름차순
});

points.forEach(point => console.log(point.join(" ")));
