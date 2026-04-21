/**문제 설명
1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 
각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 
통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 
레버 또한 통로들 중 한 칸에 있습니다. 
따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 
이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 
미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.

미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 
미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 
만약, 탈출할 수 없다면 -1을 return 해주세요.
 */

//======================================//
// let maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]; // 16

function solution(maps) {
  const mapArray = maps.map((v) => v.split(""));
  let sr = 0,
    sc = 0;
  let lr = 0,
    lc = 0;

  let rowLen = mapArray.length;
  let colLen = mapArray[0].length;

  // 시작 인덱스 찾기
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (mapArray[row][col] === "S") {
        sr = row;
        sc = col;
      }
      if (mapArray[row][col] === "L") {
        lr = row;
        lc = col;
      }
    }
  }

  let dr = [-1, 1, 0, 0];
  let dc = [0, 0, -1, 1];

  // target까지의 최단 거리
  function bfs(r, c, target) {
    const visited = Array.from({ length: rowLen }, () =>
      Array(colLen).fill(false),
    );

    const queue = [[r, c, 0]];
    visited[r][c] = true;
    let head = 0;

    while (head < queue.length) {
      const [rr, cc, dist] = queue[head++];

      // 타겟에 도달했으면 거리 리턴
      if (mapArray[rr][cc] === target) return dist;

      for (let i = 0; i < 4; i++) {
        const nr = rr + dr[i];
        const nc = cc + dc[i];

        // 범위 체크
        if (nr < 0 || nr >= rowLen || nc < 0 || nc >= colLen) continue;
        // 벽인지 체크
        if (mapArray[nr][nc] === "X") continue;
        // 방문여부 체크
        if (visited[nr][nc]) continue;

        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
    return -1;
  }

  const toLever = bfs(sr, sc, "L");
  if (toLever === -1) return -1;
  const toExit = bfs(lr, lc, "E");
  if (toExit === -1) return -1;

  return toLever + toExit;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
