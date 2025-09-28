/* 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로, 소문자는 대문자로 변환해서 출력하는 코드를 작성하시오.
1 <= 20 str의 길이 <= 20;
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  let str = input[0];

  function change(line) {
    let result = "";
    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === char.toUpperCase()) {
        // 현재 문자가 대문자면 소문자로
        result += char.toLowerCase();
      } else {
        // 현재 문자가 소문자면 대문자로
        result += char.toUpperCase();
      }
    }
    return result;
  }

  console.log(change(str));
});
