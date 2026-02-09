// 구름LEVEL 난이도3
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(lines[0]);
const work = [];
for(let i = 1;i<=n;i++){
	let arr = lines[i].split(' ');
	work.push(arr);
}

let student = [];

for(let i=0;i<n;i++){
	if(work[i][0] === 'add'){
		student.push(work[i][1]);
	}else{
		let cnt = 0;
		for(let name of student){
			if(name.startsWith(work[i][1])){
				cnt++
			}
		}
		console.log(cnt);
	}
}