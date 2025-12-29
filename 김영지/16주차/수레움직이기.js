function solution(maze) {
    const n = maze.length;
    const m = maze[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let redStart, blueStart, redEnd, blueEnd;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maze[i][j] === 1) redStart = [i, j];
            if (maze[i][j] === 2) blueStart = [i, j];
            if (maze[i][j] === 3) redEnd = [i, j];
            if (maze[i][j] === 4) blueEnd = [i, j];
        }
    }

    const startRedMask = 1 << (redStart[0] * m + redStart[1]);
    const startBlueMask = 1 << (blueStart[0] * m + blueStart[1]);

    const visited = new Set();
    const queue = [];

    queue.push([
        redStart[0], redStart[1],
        blueStart[0], blueStart[1],
        startRedMask, startBlueMask,
        0
    ]);

    visited.add(
        `${redStart}-${blueStart}-${startRedMask}-${startBlueMask}`
    );

    while (queue.length) {
        const [
            rx, ry, bx, by,
            rMask, bMask, turn
        ] = queue.shift();

        if (rx === redEnd[0] && ry === redEnd[1] &&
            bx === blueEnd[0] && by === blueEnd[1]) {
            return turn;
        }

        for (let rDir = 0; rDir < 4; rDir++) {
            let nrx = rx, nry = ry;

            if (!(rx === redEnd[0] && ry === redEnd[1])) {
                nrx = rx + dx[rDir];
                nry = ry + dy[rDir];
                if (nrx < 0 || nry < 0 || nrx >= n || nry >= m) continue;
                if (maze[nrx][nry] === 5) continue;
                const rBit = 1 << (nrx * m + nry);
                if (rMask & rBit) continue;
            }

            for (let bDir = 0; bDir < 4; bDir++) {
                let nbx = bx, nby = by;

                if (!(bx === blueEnd[0] && by === blueEnd[1])) {
                    nbx = bx + dx[bDir];
                    nby = by + dy[bDir];
                    if (nbx < 0 || nby < 0 || nbx >= n || nby >= m) continue;
                    if (maze[nbx][nby] === 5) continue;
                    const bBit = 1 << (nbx * m + nby);
                    if (bMask & bBit) continue;
                }

                if (nrx === nbx && nry === nby) continue;
                if (nrx === bx && nry === by && nbx === rx && nby === ry) continue;

                const newRMask = rMask | (1 << (nrx * m + nry));
                const newBMask = bMask | (1 << (nbx * m + nby));

                const key = `${nrx},${nry},${nbx},${nby},${newRMask},${newBMask}`;
                if (visited.has(key)) continue;

                visited.add(key);
                queue.push([
                    nrx, nry,
                    nbx, nby,
                    newRMask, newBMask,
                    turn + 1
                ]);
            }
        }
    }

    return 0;
}