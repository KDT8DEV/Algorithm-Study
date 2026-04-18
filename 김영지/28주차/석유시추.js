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

let land = [
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
]; //16
let n = land.length; // 세로길이
let m = land[0].length; // 가로길이

// 각 칸이 어떤 덩어리에 속하는지
const groupIdMap = Array.from({ length: n }, () => Array(m).fill(0));

// 덩어리 번호 -> 크기
const groupSize = {};

// 그룹아이디
let groupId = 1;

const dr = [-1, 1, 0, 0]; // 상하이동
const dc = [0, 0, -1, 1]; // 좌우이동

// 연결된 모든 석유를 탐색해 같은 덩어리 크기 반환 함수
// 값이 1인지 확인한다 (석유인지)
// 이미 방문했는지 확인한다
// 연결된 방향(상하좌우)인지 확인한다
function bfs(sr, sc, id) {
  const queue = [[sr, sc]];
  groupIdMap[sr][sc] = id;

  let size = 1;

  while (queue.length) {
    const [r, c] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      // 범위 체크
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

      // 석유 아니면(0이면) 패스
      if (land[nr][nc] === 0) continue;

      // 이미 방문했으면 패스
      if (groupIdMap[nr][nc] !== 0) continue;

      groupIdMap[nr][nc] = id;
      queue.push([nr, nc]);
      size++;
    }
  }
  return size;
}

// 1. 모든 석유 덩어리 찾기
for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    // 석유가 아닌 칸이면 스킵
    if (land[r][c] === 0) continue;

    // 이미 어떤 덩어리에 속한 칸이면 스킵
    if (groupIdMap[r][c] !== 0) continue;

    // 새로운 석유 덩어리 발견 -> BFS로 전체 탐색
    const size = bfs(r, c, groupId);

    // 덩어리 번호 -> 크기 저장
    groupSize[groupId] = size;

    // 다음 덩어리를 위해 id 증가
    groupId++;
  }
}

// 2. 열 기준으로 최대 석유량 계산
let answer = 0;

// 각 열마다 시추관을 설치한다고 가정
for (let col = 0; col < m; col++) {
  // 한 열에서 만나는 덩어리 중복 제거용 Set
  const set = new Set();

  // 해당 열을 위에서 아래로 탐색
  for (let row = 0; row < n; row++) {
    // 현재 칸이 속한 덩어리 번호 확인
    const id = groupIdMap[row][col];

    // 석유가 있는 칸이라면 (id > 0)
    if (id > 0) {
      // Set에 추가 (같은 덩어리 여러 번 만나도 1번만 저장됨)
      set.add(id);
    }
  }

  // 이 열에서 뽑을 수 있는 총 석유량 계산
  let sum = 0;

  // Set에 담긴 덩어리들의 크기를 모두 더함
  for (const id of set) {
    sum += groupSize[id];
  }

  // 최대값 갱신
  answer = Math.max(answer, sum);
}

// 최종 최대 석유량 반환
console.log(answer);
