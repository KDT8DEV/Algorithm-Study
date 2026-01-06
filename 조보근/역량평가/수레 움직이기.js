/* n x m 크기 격자 모양의 퍼즐판이 주어집니다.

퍼즐판에는 빨간색 수레와 파란색 수레가 하나씩 존재합니다. 각 수레들은 자신의 시작 칸에서부터 자신의 도착 칸까지 이동해야 합니다.
모든 수레들을 각자의 도착 칸으로 이동시키면 퍼즐을 풀 수 있습니다.

당신은 각 턴마다 반드시 모든 수레를 상하좌우로 인접한 칸 중 한 칸으로 움직여야 합니다. 단, 수레를 움직일 때는 아래와 같은 규칙이 있습니다.

수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
동시에 두 수레를 같은 칸으로 움직일 수 없습니다.
수레끼리 자리를 바꾸며 움직일 수 없습니다.
예를 들어, 아래 그림처럼 n = 3, m = 2인 퍼즐판이 있습니다.

rb_horse1.jpg

속이 빨간색인 원은 빨간색 수레를 나타냅니다.
속이 파란색인 원은 파란색 수레를 나타냅니다.
테두리가 빨간색인 원은 빨간색 수레의 도착 칸을 나타냅니다.
테두리가 파란색인 원은 파란색 수레의 도착 칸을 나타냅니다.
위 퍼즐판은 아래와 같은 순서로 3턴만에 풀 수 있습니다.

rb_horse2.jpg

빨간색 사선이 처진 칸은 빨간색 수레가 방문했던 칸을 나타냅니다. 규칙에 따라 빨간색 수레는 빨간색 사선이 처진 칸(방문했던 칸)으로는 이동할 수 없습니다.
파란색 사선이 처진 칸은 파란색 수레가 방문했던 칸을 나타냅니다. 규칙에 따라 파란색 수레는 파란색 사선이 처진 칸(방문했던 칸)으로는 이동할 수 없습니다.
rb_horse3.jpg

위처럼 동시에 수레를 같은 칸으로 움직일 수는 없습니다.
퍼즐판의 정보를 나타내는 2차원 정수 배열 maze가 매개변수로 주어집니다. 퍼즐을 푸는데 필요한 턴의 최솟값을 return 하도록 solution 함수를 완성해 주세요. 퍼즐을 풀 수 없는 경우 0을 return 해주세요 */

function solution(maze) {
  const N = maze.length;
  const M = maze[0].length;

  let redStart, blueStart, redEnd, blueEnd;

  // 시작 및 도착 위치 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maze[i][j] === 1) redStart = [i, j];
      else if (maze[i][j] === 2) blueStart = [i, j];
      else if (maze[i][j] === 3) redEnd = [i, j];
      else if (maze[i][j] === 4) blueEnd = [i, j];
    }
  }

  // 방문 체크 배열 (각 수레별로 따로 관리)
  const visitedRed = Array.from({ length: N }, () => Array(M).fill(false));
  const visitedBlue = Array.from({ length: N }, () => Array(M).fill(false));

  visitedRed[redStart[0]][redStart[1]] = true;
  visitedBlue[blueStart[0]][blueStart[1]] = true;

  let minTurns = Infinity;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const dfs = (red, blue, count) => {
    // 현재 턴수가 이미 찾은 최소값보다 크면 중단 (Pruning)
    if (count >= minTurns) return;

    const [rx, ry] = red;
    const [bx, by] = blue;
    const redArrived = rx === redEnd[0] && ry === redEnd[1];
    const blueArrived = bx === blueEnd[0] && by === blueEnd[1];

    // 두 수레 모두 도착하면 종료
    if (redArrived && blueArrived) {
      minTurns = Math.min(minTurns, count);
      return;
    }

    // 다음 이동 가능한 위치 계산
    // 도착한 수레는 현재 위치 고정 (이동 X)
    // 도착하지 않은 수레는 상하좌우 이동 (벽 X, 격자 밖 X, 방문 X)

    let nextRedMoves = [];
    let nextBlueMoves = [];

    if (redArrived) {
      nextRedMoves.push(red);
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = rx + dr[i];
        const ny = ry + dc[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          maze[nx][ny] !== 5 &&
          !visitedRed[nx][ny]
        ) {
          nextRedMoves.push([nx, ny]);
        }
      }
    }

    if (blueArrived) {
      nextBlueMoves.push(blue);
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = bx + dr[i];
        const ny = by + dc[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          maze[nx][ny] !== 5 &&
          !visitedBlue[nx][ny]
        ) {
          nextBlueMoves.push([nx, ny]);
        }
      }
    }

    // 조합 탐색
    for (const nRed of nextRedMoves) {
      for (const nBlue of nextBlueMoves) {
        const [nrx, nry] = nRed;
        const [nbx, nby] = nBlue;

        // 조건 1: 두 수레가 같은 칸으로 이동 불가
        if (nrx === nbx && nry === nby) continue;

        // 조건 2: 수레끼리 자리를 바꾸며 이동 불가
        // Red: A -> B, Blue: B -> A 인 경우
        if (nrx === bx && nry === by && nbx === rx && nby === ry) continue;

        // 방문 처리 및 재귀
        // 도착한 수레는 방문 처리를 굳이 하지 않음 (이미 도착했으므로)
        // 하지만 도착하지 않은 수레가 새로 이동한 칸은 방문 처리 필요
        const redMoved = !redArrived;
        const blueMoved = !blueArrived;

        if (redMoved) visitedRed[nrx][nry] = true;
        if (blueMoved) visitedBlue[nbx][nby] = true;

        dfs(nRed, nBlue, count + 1);

        if (redMoved) visitedRed[nrx][nry] = false;
        if (blueMoved) visitedBlue[nbx][nby] = false;
      }
    }
  };

  dfs(redStart, blueStart, 0);

  return minTurns === Infinity ? 0 : minTurns;
}

// 테스트 케이스
console.log("=== Move the Cart Test ===\n");

const testCases = [
  {
    maze: [
      [1, 4],
      [0, 0],
      [2, 3],
    ],
    expected: 3,
    desc: "Example 1",
  },
  {
    maze: [
      [1, 0, 2],
      [0, 0, 0],
      [5, 0, 5],
      [4, 0, 3],
    ],
    expected: 7,
    desc: "Example 2",
  },
  {
    maze: [
      [1, 5],
      [2, 5],
      [4, 5],
      [3, 5],
    ],
    expected: 0,
    desc: "Example 3 (Unsolvable)",
  },
  {
    maze: [[4, 1, 2, 3]],
    expected: 0,
    desc: "Example 4 (No Crossing)",
  },
];

let passCount = 0;
testCases.forEach((test, index) => {
  const result = solution(test.maze);
  const pass = result === test.expected;

  console.log(`Test ${index + 1}: ${test.desc}`);
  console.log(`  Input: ${JSON.stringify(test.maze)}`);
  console.log(
    `  Expected: ${test.expected}, Actual: ${result} [${
      pass ? "PASS" : "FAIL"
    }]`
  );
  console.log();

  if (pass) passCount++;
});

console.log(`=== Result: ${passCount}/${testCases.length} Passed ===`);
