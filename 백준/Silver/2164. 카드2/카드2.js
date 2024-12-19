const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function findLastCard(N) {
  const deque = Array.from({ length: N }, (_, i) => i + 1);
  let head = 0;
  let tail = N;

  while (tail - head > 1) { 
    head++;
    deque[tail++] = deque[head++];
  }

  console.log(deque[head]); 
}

findLastCard(input);
