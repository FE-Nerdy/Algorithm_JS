const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

const N = +input[0];
let arr = [];
arr[0] = [];
arr[1] = new Array(10).fill(1);
arr[1][0] = 0;
for(var i=1; i<N; i++){
    arr[i+1] = new Array(10).fill(0);
    arr[i+1][1] += arr[i][0] % 1000000000;
    for(var k=1; k<arr[i].length-1; k++){
        arr[i+1][k-1] += arr[i][k] % 1000000000;
        arr[i+1][k+1] += arr[i][k] % 1000000000;
    }
    arr[i+1][8] += arr[i][9] % 1000000000;
}
console.log(arr[N].reduce((a,v)=>a+v, 0) % 1000000000);