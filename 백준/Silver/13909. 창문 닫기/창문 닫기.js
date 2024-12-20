const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

const result = Math.floor(Math.sqrt(n));

console.log(result);
