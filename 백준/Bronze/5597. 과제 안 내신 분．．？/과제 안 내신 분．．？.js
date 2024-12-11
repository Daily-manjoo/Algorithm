const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const students = Array.from({ length: 30 }, (_, i) => i + 1);

input.forEach(number => {
  const idx = students.indexOf(Number(number));
  if (idx !== -1) {
    students.splice(idx, 1);
  }
});

console.log(students[0]);
console.log(students[1]);
