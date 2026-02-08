// 구름LEVEL 난이도2
const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').trim().split(/\s+/);
let idx = 0;
const next = () => input[idx++];

const N = Number(next());
const M = Number(next());
const mArr = [];
for(let i = 0; i < M;i++){
	mArr.push(Number(next()));
}

let card = new Map();
let cnt = 0;
for(let m of mArr){
	card.set(m, (card.get(m) || 0) + 1);
	cnt++;
	if(card.size === N) return console.log(cnt);
}

console.log(-1);
