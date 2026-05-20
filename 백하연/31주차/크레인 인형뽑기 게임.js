// 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 된다.
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않는다.
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      // 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않는다.
      if (board[i][move - 1] === 0) continue;

      // 인형이 있는 경우
      if (stack[stack.length - 1] === board[i][move - 1]) {
        stack.pop();
        answer += 2; // 터트려져 사라진 인형의 개수는 2개이므로 2를 더해준다.
      } else {
        stack.push(board[i][move - 1]);
      }
      // 인형이 집어지면 해당 위치는 빈칸이 된다.
      board[i][move - 1] = 0;
      break;
    }
  });

  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); // 4
