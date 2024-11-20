const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map((item) => +item);

let answer = 0;
arr.sort((a, b) => a - b)
for (let i = 0 ; i < N ; i++) {
    answer += arr[i] * (N-i)
}
console.log(answer);