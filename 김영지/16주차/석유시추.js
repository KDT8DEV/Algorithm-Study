/**나의 문제 풀이 */
// bfs 문제

let land = [
  [0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1]
];

// 세로 길이
const n = land.length;
// 가로 길이
const m = land[0].length;

const visited = Array.from({length: n}, () => Array(m).fill(false));
console.log(visited);
const oilId = Array.from({length: n}, () => Array(m).fill(0));
console.log(oilId);
let oilSize = [0];
let id = 1;

const dirs = [[1,0], [-1, 0], [0, 1], [0, -1]];

function bfs(r, c){
    const queue = [[r, c]];
    visited[r][c] = true;
    oilId[r][c] = id;
    let cnt = 1;

    while(queue.length){
        const [x, y] = queue.shift();
        for(const [dx, dy] of dirs){
            const nx = x + dx;
            const ny = y + dy;
            if(nx>=0 && nx<n && ny>=0 && ny<m &&
                land[nx][ny] === 1 && !visited[nx][ny]
            ){
                visited[nx][ny] = true;
                oilId[nx][ny] = id;
                queue.push([nx, ny]);
                cnt++;
            }
        }
    }
    oilSize[id] = cnt;
    id++;
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(land[i][j] === 1 && !visited[i][j]){
            bfs(i, j);
        }
    }
}

let answer = 0;
for(let col = 0; col < m; col++){
    const set = new Set();
    let sum = 0;
    for(let row = 0; row < n; row++){
        const curId = oilId[row][col];
        if(curId !== 0 && !set.has(curId)){
            set.add(curId);
            sum += oilSize[curId];
        }
    }
    answer = Math.max(answer, sum);
}

console.log(answer);
