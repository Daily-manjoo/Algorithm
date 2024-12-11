const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let t = 1; t <= M; t++) {
  const [i, j] = input[t].split(" ").map(Number);
  const temp = baskets[i - 1];
  baskets[i - 1] = baskets[j - 1];
  baskets[j - 1] = temp;
}

console.log(baskets.join(" "));
