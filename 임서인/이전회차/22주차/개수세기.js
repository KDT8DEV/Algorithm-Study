// 백준
// https://www.acmicpc.net/problem/10807

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const size = Number(input[0]);
const list = input[1].split(' ').map(Number);
const target = Number(input[2]);

let count = 0;
for (let i = 0; i < size; i++) {
  if (list[i] === target) {
    count++;
  }
}

console.log(count);

// 문제 풀이
// size로 배열의 크기를 정하고
// list로 배열을 정의하고
// target으로 찾을 값을 정의하고
// 배열에서 target과 같은 값을 찾고 있다면 count를 증가시킴
