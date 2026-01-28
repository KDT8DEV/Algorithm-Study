const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';
for (let i = 1; i <= n; i++) {
  result += '*'.repeat(i) + '\n';
}

console.log(result.trim());
// 입력된 정수 n에 대해 1부터 n까지 각 줄에 해당하는 개수만큼 '*'을 출력하는 코드
