const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

console.log(`${n} is ${n % 2 === 0 ? 'even' : 'odd'}`);

// ndl readFileSync 0 으로 표준 입력을 읽어와
// 입력된 정수가 짝수인지 홀수인지 판별하여 출력하는 코드
