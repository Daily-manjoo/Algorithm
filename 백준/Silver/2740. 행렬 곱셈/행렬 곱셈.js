const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input.slice(1, 1 + n).map(row => row.split(' ').map(Number));

const [_, k] = input[1 + n].split(' ').map(Number);
const B = input.slice(2 + n).map(row => row.split(' ').map(Number));

const result = Array.from({ length: n }, () => Array(k).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < k; j++) {
        for (let l = 0; l < m; l++) {
            result[i][j] += A[i][l] * B[l][j];
        }
    }
}

console.log(result.map(row => row.join(' ')).join('\n'));
