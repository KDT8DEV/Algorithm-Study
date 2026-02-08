// 5 21
// 5 6 7 8 9
'use strict';
const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split(/\s+/);
let idx = 0;
const next = () => input[idx++];

// 테스트 코드
const n = Number(next());   // 카드 n개
const m = Number(next());   // 넘지 않아야 하는 수 m
const arr = Array.from({ length: n }, () => Number(next()));    // n개의 카드 종류
// const arr = [];             
// for(let i = 0; i<n;i++){
//     arr.push(Number(next()));
// }

// let newArr = [];
let answer = 0;
for(let i = 0; i < n;i++){
    for(let j = i+1; j < n;j++){
        for(let k = j+1; k < n;k++){
            let sum = arr[i] + arr[j] + arr[k];
            if (sum <= m && sum > answer) {
                answer = sum;
            }
            // if(sum <= m){
            //     newArr.push(sum);
            // }
            
        }
    }
}

console.log(answer);
// console.log(Math.max(...newArr));