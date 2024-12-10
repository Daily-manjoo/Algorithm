const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const words = input.split(" ").filter(word => word !== "");

console.log(words.length);
