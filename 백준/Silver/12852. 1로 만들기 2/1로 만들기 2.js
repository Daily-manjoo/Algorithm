const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input, 10);


const dp = new Array(N + 1).fill(0);
const path = new Array(N + 1).fill(0); 

for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    path[i] = i - 1;

    if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
        dp[i] = dp[i / 2] + 1;
        path[i] = i / 2;
    }

    if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
        dp[i] = dp[i / 3] + 1;
        path[i] = i / 3;
    }
}

console.log(dp[N]);

const result = [];
let current = N;
while (current !== 0) {
    result.push(current);
    current = path[current];
}

console.log(result.join(" "));
