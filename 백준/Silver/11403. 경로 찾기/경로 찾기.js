const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0], 10);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][k] && graph[k][j]) {
                graph[i][j] = 1; 
            }
        }
    }
}

const result = graph.map((row) => row.join(" ")).join("\n");
console.log(result);
