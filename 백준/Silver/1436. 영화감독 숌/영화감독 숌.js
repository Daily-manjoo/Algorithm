const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

let count = 0;
let number = 666;

while (true) {
    if (number.toString().includes("666")) {
        count++;
        if (count === N) {
            console.log(number);
            break;
        }
    }
    number++;
}
