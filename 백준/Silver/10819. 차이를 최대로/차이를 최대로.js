const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0], 10);
const array = input[1].split(" ").map(Number);

let maxResult = -Infinity;

function getPermutations(arr, length) {
    if (length === 1) return arr.map((v) => [v]);

    const permutations = [];
    arr.forEach((fixed, index, original) => {
        const rest = [...original.slice(0, index), ...original.slice(index + 1)];
        const smallerPermutations = getPermutations(rest, length - 1);
        smallerPermutations.forEach((permutation) => {
            permutations.push([fixed, ...permutation]);
        });
    });
    return permutations;
}

const permutations = getPermutations(array, N);

permutations.forEach((perm) => {
    let sum = 0;
    for (let i = 0; i < perm.length - 1; i++) {
        sum += Math.abs(perm[i] - perm[i + 1]);
    }
    maxResult = Math.max(maxResult, sum);
});

console.log(maxResult);
