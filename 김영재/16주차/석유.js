function solution(oil) {
  const R = oil.length, C = oil[0].length;
  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  const compSize = [];
  const columnsToComponents = Array.from({ length: C }, () => new Set());

  function dfs(r, c, cid) {
    const stack = [[r, c]];
    visited[r][c] = true;
    let size = 0;
    const cols = new Set();

    while (stack.length) {
      const [x, y] = stack.pop();
      size++;
      cols.add(y);

      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx>=0 && nx<R && ny>=0 && ny<C && !visited[nx][ny] && oil[nx][ny] === 1) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }

    compSize[cid] = size;
    for (const col of cols) columnsToComponents[col].add(cid);
  }

  let cid = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (oil[r][c] === 1 && !visited[r][c]) {
        dfs(r, c, cid++);
      }
    }
  }

  let ans = 0;
  for (let col = 0; col < C; col++) {
    let total = 0;
    for (const id of columnsToComponents[col]) total += compSize[id];
    ans = Math.max(ans, total);
  }
  return ans;
}