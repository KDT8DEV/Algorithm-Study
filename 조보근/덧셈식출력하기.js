// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해보세요. a + b = c

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let output = "";
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  output = Number(input[0]) + Number(input[1]);
  console.log(`${Number(input[0])} + ${Number(input[1])} = ${output}`);
});
