const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = parseInt(input[0], 10);
const M = parseInt(input[1], 10); 

const result = [];
const combination = [];

function backtrack(depth) {
    if (depth === M) {
        result.push(combination.join(" "));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!combination.includes(i)) {
            combination.push(i); 
            backtrack(depth + 1); 
            combination.pop(); 
        }
    }
}

backtrack(0);

console.log(result.join("\n"));
