let fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

let N = Number(input[0]);
let li = input[1].split(" ").map(Number);

function binarySearch(arr, left, right, target) {
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

let lis = [];
let j = 0;
lis[0] = li[0];
let i = 1;

while (i < N) {
  if (lis[j] < li[i]) {
    lis[++j] = li[i];
  } else {
    let idx = binarySearch(lis, 0, j, li[i]);
    lis[idx] = li[i];
  }
  i++;
}
console.log(lis.length);
