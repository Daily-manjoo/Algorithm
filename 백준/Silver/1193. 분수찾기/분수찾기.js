const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const X = parseInt(input, 10);

function findFraction(X) {
    let n = 1;
    let sum = 0;

    while (sum + n < X) {
        sum += n;
        n++;
    }

    let positionInDiagonal = X - sum; 


    if (n % 2 === 0) {
        const numerator = positionInDiagonal;
        const denominator = n - positionInDiagonal + 1;
        return `${numerator}/${denominator}`;
    } else {
        const numerator = n - positionInDiagonal + 1;
        const denominator = positionInDiagonal;
        return `${numerator}/${denominator}`;
    }
}

console.log(findFraction(X));
