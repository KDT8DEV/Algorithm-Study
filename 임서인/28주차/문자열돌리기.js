const str = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(str.split('').join('\n'));

// 풀이
// close는 입력이 끝난 후 실행되기 때문에 그 안에서 출력하면 무조건 정상동작
