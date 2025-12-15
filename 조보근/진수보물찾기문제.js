function solution(n, m, hole) {
  const holeSet = new Set();
  for (const [a, b] of hole) {
    holeSet.add(`${a},${b}`);
  }
  const queue = [[1, 1, 0, 0]];

  const visited = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => [false, false])
  );
  visited[1][1][0] = true;

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  while (queue.length > 0) {
    const [y, x, time, used] = queue.shift();
    if (y === n && x === m) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 1 || ny > n || nx < 1 || nx > m) continue;
      if (visited[ny][nx][used]) continue;
      if (holeSet.has(`${ny},${nx}`)) continue;

      visited[ny][nx][used] = true;
      queue.push([ny, nx, time + 1, used]);
    }

    if (used === 0) {
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i] * 2;
        const nx = x + dx[i] * 2;
        if (ny < 1 || ny > n || nx < 1 || nx > m) continue;
        if (visited[ny][nx][1]) continue;
        if (holeSet.has(`${ny},${nx}`)) continue;

        visited[ny][nx][1] = true;
        queue.push([ny, nx, time + 1, 1]);
      }
    }
  }
  return -1;
}
