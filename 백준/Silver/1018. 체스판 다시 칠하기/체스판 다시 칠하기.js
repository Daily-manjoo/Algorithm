const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

const generatePattern = (startColor) => {
    const pattern = [];
    for (let i = 0; i < 8; i++) {
        let row = "";
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                row += startColor; 
            } else {
                row += startColor === "B" ? "W" : "B"; 
            }
        }
        pattern.push(row);
    }
    return pattern;
};

const pattern1 = generatePattern("B");
const pattern2 = generatePattern("W");

const countChanges = (subBoard, pattern) => {
    let changes = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (subBoard[i][j] !== pattern[i][j]) {
                changes++;
            }
        }
    }
    return changes;
};

let minChanges = Infinity;
for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        const subBoard = board.slice(i, i + 8).map(row => row.slice(j, j + 8));
        const changes1 = countChanges(subBoard, pattern1);
        const changes2 = countChanges(subBoard, pattern2);
        minChanges = Math.min(minChanges, changes1, changes2);
    }
}

console.log(minChanges);
