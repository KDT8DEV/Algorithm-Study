function solution(board) {
  // # n: 정사각형 board 크기
  const n = board.length;

  // # 위험지역 표시용(지뢰 + 주변 8칸)
  const danger = Array.from({ length: n }, () => Array(n).fill(false));

  // # 지뢰 기준으로 (자기 자신 포함) 3x3 영역을 위험으로 마킹
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 1) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
              danger[nr][nc] = true;
            }
          }
        }
      }
    }
  }

  // # 위험지역이 아닌 칸(=안전지역) 개수 세기
  let safeCount = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (!danger[r][c]) safeCount++;
    }
  }

  return safeCount;
}

// function solution(board) {

//     let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
//     let safezone = 0;

//     board.forEach((row, y, self) => row.forEach((it, x) => {
//         if (it === 1) return false;
//         return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
//                ? false : safezone++;
//     }));

//     return safezone;
// }