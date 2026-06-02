function solution(board, moves) {
  let stack = [];
  let cnt = 0;
  for (let m of moves) {
    let col = m - 1;
    for (let i = 0; i < board.length; i++) {
      let doll = board[i][col];
      if (doll === 0) continue;
      board[i][col] = 0;
      if (stack.length > 0 && stack[stack.length - 1] === doll) {
        stack.pop();
        cnt += 2;
      } else {
        stack.push(doll);
      }
      break;
    }
  }
  return cnt;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
