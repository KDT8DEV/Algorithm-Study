/* 문자열 str이 주어집니다. 
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해보세요.*/


//방법 1 (처음보는 for of 문)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// let str = "";
// rl.on("line", function (line) {
//   input = line;
// }).on("close", function () {
//   for (str of input) {
//     console.log(str);
//   }
// });

//방법2   (for each문)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let str = "";
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  [...input].forEach((str) => console.log(str));
});
