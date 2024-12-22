const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const combination = (n, m, start, result, current) => {
    if (current.length === m) {
        result.push(current.join(" "));
        return;
    }

    for (let i = start; i <= n; i++) {
        combination(n, m, i + 1, result, [...current, i]);
    }
};

const result = [];
combination(N, M, 1, result, []);
console.log(result.join("\n"));
