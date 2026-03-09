//백준
// https://www.acmicpc.net/problem/25304

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let idx = 0;

// 영수증 총 금액
const X = Number(input[idx++]);

// 물건 종류 수
const N = Number(input[idx++]);

let sum = 0;

// 물건들 가격 * 개수 계산
for (let i = 0; i < N; i++) {
  const [a, b] = input[idx++].split(' ').map(Number);
  sum += a * b;
}

// 결과 출력
console.log(sum === X ? 'Yes' : 'No');

// 문제설명
// 총 금액과 영수증 내역이 맞는지 확인
// 입력 예시
// 260000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8
