const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a, b, c, d, e, f] = input;

const denominator = a * e - b * d;

const x = (c * e - b * f) / denominator;
const y = (a * f - c * d) / denominator;

console.log(`${Math.round(x)} ${Math.round(y)}`);
