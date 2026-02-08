'use strict'
const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split(/\s+/);
let idx = 0;
const next = () => input[idx++];

const n = Number(next());
const m = Number(next());

// 1~n까지의 정수 중 m개 수열
// 순열 + 백트래킹
let visited = Array(n+1).fill(false);
// visited[i] : 내가 숫자 i를 사용했는지 여부
let path = [];  // 조건을 만족하는 수열
let results = "";

// depth : 사용한 숫자 개수
function dfs(depth){
    if(depth === m) {
        results += path.join(' ') + '\n';
        return;    
    }
    for(let i = 1; i <= n;i++){
    
        if(!visited[i]){
            visited[i] = true;
            path.push(i);   // 숫자 사용

            dfs(depth+1);   // 다음 자리 숫자 고르러 탐색
            path.pop();     // 되돌리기
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(results);