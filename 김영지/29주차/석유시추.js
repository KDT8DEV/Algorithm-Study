/**문제 설명
[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

세로길이가 n 가로길이가 m인 격자 모양의 땅 속에서 석유가 발견되었습니다. 
석유는 여러 덩어리로 나누어 묻혀있습니다. 당신이 시추관을 수직으로 단 하나만 뚫을 수 있을 때, 
가장 많은 석유를 뽑을 수 있는 시추관의 위치를 찾으려고 합니다. 
시추관은 열 하나를 관통하는 형태여야 하며, 열과 열 사이에 시추관을 뚫을 수 없습니다.

석유시추-1.drawio.png

예를 들어 가로가 8, 세로가 5인 격자 모양의 땅 속에 위 그림처럼 석유가 발견되었다고 가정하겠습니다. 
상, 하, 좌, 우로 연결된 석유는 하나의 덩어리이며, 석유 덩어리의 크기는 덩어리에 포함된 칸의 수입니다. 
그림에서 석유 덩어리의 크기는 왼쪽부터 8, 7, 2입니다.

석유시추-2.drawio.png

시추관은 위 그림처럼 설치한 위치 아래로 끝까지 뻗어나갑니다. 
만약 시추관이 석유 덩어리의 일부를 지나면 해당 덩어리에 속한 모든 석유를 뽑을 수 있습니다. 
시추관이 뽑을 수 있는 석유량은 시추관이 지나는 석유 덩어리들의 크기를 모두 합한 값입니다. 
시추관을 설치한 위치에 따라 뽑을 수 있는 석유량은 다음과 같습니다.
 */

//=======================================================================//
// 1. land 전체를 돌면서 덩어리 찾기
// 2. 각 덩어리 크기 저장
// 3. 각 칸에 덩어리 번호 기록
// 4. 각 열을 돌면서 만나는 덩어리 번호를 Set에 저장
// 5. 그 덩어리 크기 합의 최댓값 구하기

function solution(land) {
  let n = land.length;
  let m = land[0].length;

  // 그룹id 매핑할 지도
  let groupIdMap = Array.from({ length: n }, () => Array(m).fill(0));

  // 그룹 id별 사이즈
  let groupSize = {};
  // 그룹 id
  let groupId = 1;

  let dr = [-1, 1, 0, 0]; // 상하이동
  let dc = [0, 0, -1, 1]; // 좌우이동

  // id별 사이즈 구하기
  function bfs(row, col, id) {
    const queue = [[row, col]];
    groupIdMap[row][col] = id;

    let size = 1;

    while (queue.length) {
      const [r, c] = queue.shift();

      for (let i = 0; i < 4; i++) {
        // 상하좌우 이동
        const nr = r + dr[i];
        const nc = c + dc[i];

        // 범위에서 벗어나면 skip
        if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

        // 석유 아니면 skip
        if (land[nr][nc] === 0) continue;
        // 이미 방문했으면 skip
        if (groupIdMap[nr][nc] !== 0) continue;

        // 해당 id 매핑
        groupIdMap[nr][nc] = id;
        // 새 좌표를 탐색 대상에 넣기
        queue.push([nr, nc]);
        size++;
      }
    }
    return size;
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      // 석유 아닌 칸이면 skip
      if (land[r][c] === 0) continue;
      // 이미 그룹 id 속한 값이면 skip
      if (groupIdMap[r][c] !== 0) continue;

      const size = bfs(r, c, groupId);
      groupSize[groupId] = size;
      groupId++;
    }
  }

  let answer = 0;

  for (let i = 0; i < m; i++) {
    const set = new Set();
    for (let j = 0; j < n; j++) {
      const id = groupIdMap[j][i];
      if (id > 0) {
        set.add(id);
      }
    }

    let sum = 0;
    for (let id of set) {
      sum += groupSize[id];
    }

    answer = Math.max(answer, sum);
  }
  return answer;
}

// let land = [
//   [0, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 1, 0, 0],
//   [1, 1, 0, 0, 0, 1, 1, 0],
//   [1, 1, 1, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 1, 1],
// ]; // 9

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ]),
);
