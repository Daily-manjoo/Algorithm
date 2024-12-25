const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]); 
const people = input.slice(1).map(line => line.split(' ').map(Number));

const ranks = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      const [weightA, heightA] = people[i];
      const [weightB, heightB] = people[j];
      if (weightA < weightB && heightA < heightB) {
        ranks[i]++;
      }
    }
  }
}

console.log(ranks.join(' '));
