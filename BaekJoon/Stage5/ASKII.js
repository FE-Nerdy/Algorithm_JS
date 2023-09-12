function solution() {
    console.log(input[0].charCodeAt(0));
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(line);
    rl.close();
}).on("close", function() {
    solution();
    process.exit();
});