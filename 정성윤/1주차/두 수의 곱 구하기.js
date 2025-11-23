// index.js
const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function solution(num1, num2) {
return num1 * num2; // 두 수의 곱 리턴
}

rl.question("첫 번째 숫자를 입력하세요: ", (num1) => {
rl.question("두 번째 숫자를 입력하세요: ", (num2) => {
const result = solution(Number(num1), Number(num2));
console.log("결과:", result);
rl.close();
});
});