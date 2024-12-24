const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);
const K = parseInt(input[1]);

function josephus(N, K) {
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];
  let index = 0;

  while (queue.length > 0) {
    index = (index + K - 1) % queue.length; 
    result.push(queue.splice(index, 1)[0]); 
  }

  return `<${result.join(', ')}>`;
}

console.log(josephus(N, K));
