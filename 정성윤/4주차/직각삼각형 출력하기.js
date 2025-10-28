// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// for(let i = 0; i < line; i++){
//     console.log("*".repeat(i));
// }
// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     console.log(Number(input[0]));
// });

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const line = Number(input);

// let arr = [];
// for (let i = 1; i <= line; i++) {
//     arr.push('*'.repeat(i));
// }
// console.log(arr.join('\n'));
