const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const heights = input.slice(1).map(Number);

function largestRectangle(heights) {
    let stack = [];
    let maxArea = 0;

    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}

console.log(largestRectangle(heights));