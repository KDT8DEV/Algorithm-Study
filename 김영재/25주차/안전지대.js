function solution(board) {
  const n = board.length;
  const danger = Array.from({ length: n }, () => Array(n).fill(false));

  // 8방향 + 자기 자신
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 0],  [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            danger[nx][ny] = true;
          }
        }
      }
    }
  }

  // 안전지역 카운트
  let safeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!danger[i][j]) safeCount++;
    }
  }

  return safeCount;
}

// 예시 실행
console.log(solution([[0,0,0],[0,1,0],[0,0,0]])); // 0 (모두 위험지역)
console.log(solution([[0,0,0],[0,0,0],[0,0,0]])); // 9 (모두 안전지역)