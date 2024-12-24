const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [N, K] = input.split(' ').map(Number);

const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

const binomialCoefficient = (n, k) => {
    return factorial(n) / (factorial(k) * factorial(n - k));
};

console.log(binomialCoefficient(N, K));
