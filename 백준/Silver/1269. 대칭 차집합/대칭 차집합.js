const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [sizeA, sizeB] = input[0].split(" ").map(Number);

const setA = new Set(input[1].split(" ").map(Number));
const setB = new Set(input[2].split(" ").map(Number));
const symmetricDifference = new Set();

for (const value of setA) {
    if (!setB.has(value)) {
        symmetricDifference.add(value);
    }
}

for (const value of setB) {
    if (!setA.has(value)) {
        symmetricDifference.add(value);
    }
}

console.log(symmetricDifference.size);
