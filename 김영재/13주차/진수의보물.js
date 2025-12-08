function solution(n, m, holes) {
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    const jumps = [[2,0], [-2,0], [0,2], [0,-2]];

    const holeSet = new Set(holes.map(([x,y]) => `${x-1},${y-1}`));

    const visited = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => [false, false])
    );

    let queue = [[0,0,0,0]];
    visited[0][0][0] = true;

    while (queue.length > 0) {
        const [x,y,used,time] = queue.shift();

        if (x === n-1 && y === m-1) return time;

        for (let [dx,dy] of directions) {
            const nx = x+dx, ny = y+dy;
            if (nx>=0 && nx<n && ny>=0 && ny<m) {
                if (!holeSet.has(`${nx},${ny}`)) { // hole이 아니면 이동 가능
                    if (!visited[nx][ny][used]) {
                        visited[nx][ny][used] = true;
                        queue.push([nx,ny,used,time+1]);
                    }
                }
            }
        }

        if (used === 0) {
            for (let [dx,dy] of jumps) {
                const nx = x+dx, ny = y+dy;
                if (nx>=0 && nx<n && ny>=0 && ny<m) {
                      
                    if (!holeSet.has(`${nx},${ny}`) && !visited[nx][ny][1]) {
                        visited[nx][ny][1] = true;
                        queue.push([nx,ny,1,time+1]);
                    }
                }
            }
        }
    }

    // 도달 불가능
    return -1;
}