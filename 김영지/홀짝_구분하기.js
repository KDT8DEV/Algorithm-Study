// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 
// 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    if(n%2 === 0){
        console.log(n + ' is even');
    }
    else{
        console.log(n + ' is odd');
    }
});

// ======================
// 인상 깊은 다른 사람 풀이
// 삼항연산자로 홀짝 문자열을 변수로 담아 console.log에 한번에 묶어서 출력
const readline = require('readline');
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
})