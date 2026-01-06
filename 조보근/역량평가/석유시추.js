/* 세로길이가 n 가로길이가 m인 격자 모양의 땅 속에서 석유가 발견되었습니다. 석유는 여러 덩어리로 나누어 묻혀있습니다. 당신이 시추관을 수직으로 단 하나만 뚫을 수 있을 때, 가장 많은 석유를 뽑을 수 있는 시추관의 위치를 찾으려고 합니다. 시추관은 열 하나를 관통하는 형태여야 하며, 열과 열 사이에 시추관을 뚫을 수 없습니다.

석유시추-1.drawio.png

예를 들어 가로가 8, 세로가 5인 격자 모양의 땅 속에 위 그림처럼 석유가 발견되었다고 가정하겠습니다. 상, 하, 좌, 우로 연결된 석유는 하나의 덩어리이며, 석유 덩어리의 크기는 덩어리에 포함된 칸의 수입니다. 그림에서 석유 덩어리의 크기는 왼쪽부터 8, 7, 2입니다.

석유시추-2.drawio.png

시추관은 위 그림처럼 설치한 위치 아래로 끝까지 뻗어나갑니다. 만약 시추관이 석유 덩어리의 일부를 지나면 해당 덩어리에 속한 모든 석유를 뽑을 수 있습니다. 시추관이 뽑을 수 있는 석유량은 시추관이 지나는 석유 덩어리들의 크기를 모두 합한 값입니다. 시추관을 설치한 위치에 따라 뽑을 수 있는 석유량은 다음과 같습니다.

시추관의 위치	획득한 덩어리	총 석유량
1	[8]	8
2	[8]	8
3	[8]	8
4	[7]	7
5	[7]	7
6	[7]	7
7	[7, 2]	9
8	[2]	2
오른쪽 그림처럼 7번 열에 시추관을 설치하면 크기가 7, 2인 덩어리의 석유를 얻어 뽑을 수 있는 석유량이 9로 가장 많습니다.

석유가 묻힌 땅과 석유 덩어리를 나타내는 2차원 정수 배열 land가 매개변수로 주어집니다. 이때 시추관 하나를 설치해 뽑을 수 있는 가장 많은 석유량을 return 하도록 solution 함수를 완성해 주세요.*/

function solution(land) {
  const n = land.length; // 세로 길이
  const m = land[0].length; // 가로 길이

  // 각 칸에 석유 덩어리 ID를 저장할 배열
  const clusterMap = Array.from({ length: n }, () => Array(m).fill(0));
  // 각 덩어리의 크기를 저장할 맵
  const clusterSize = new Map();
  let clusterId = 1;

  // BFS로 석유 덩어리를 탐색하고 ID 부여
  const bfs = (startRow, startCol) => {
    const queue = [[startRow, startCol]];
    clusterMap[startRow][startCol] = clusterId;
    let size = 1;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]; // 상하좌우

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // 범위 체크 및 석유 여부, 방문 여부 확인
        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < m &&
          land[newRow][newCol] === 1 &&
          clusterMap[newRow][newCol] === 0
        ) {
          clusterMap[newRow][newCol] = clusterId;
          queue.push([newRow, newCol]);
          size++;
        }
      }
    }

    return size;
  };

  // 모든 석유 덩어리를 찾아서 ID 부여 및 크기 저장
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && clusterMap[i][j] === 0) {
        const size = bfs(i, j);
        clusterSize.set(clusterId, size);
        clusterId++;
      }
    }
  }

  // 각 열(column)에서 얻을 수 있는 석유량 계산
  let maxOil = 0;

  for (let col = 0; col < m; col++) {
    const uniqueClusters = new Set();

    // 해당 열의 모든 행을 확인하여 만나는 덩어리 ID 수집
    for (let row = 0; row < n; row++) {
      if (clusterMap[row][col] > 0) {
        uniqueClusters.add(clusterMap[row][col]);
      }
    }

    // 해당 열에서 얻을 수 있는 총 석유량 계산
    let totalOil = 0;
    for (const id of uniqueClusters) {
      totalOil += clusterSize.get(id);
    }

    maxOil = Math.max(maxOil, totalOil);
  }

  return maxOil;
}

// 테스트 케이스
console.log("=== 테스트 시작 ===\n");

// 테스트 1
const land1 = [
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
];
const result1 = solution(land1);
console.log("테스트 1:");
console.log("입력:", JSON.stringify(land1));
console.log("예상 결과: 9");
console.log("실제 결과:", result1);
console.log("통과:", result1 === 9 ? "✅" : "❌");
console.log();

// 테스트 2
const land2 = [
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
];
const result2 = solution(land2);
console.log("테스트 2:");
console.log("입력:", JSON.stringify(land2));
console.log("예상 결과: 16");
console.log("실제 결과:", result2);
console.log("통과:", result2 === 16 ? "✅" : "❌");
console.log();

console.log("=== 테스트 완료 ===");
