// 지피티햄
function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 모든 숫자를 다 사용한 경우
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    // 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);  // index 0부터, sum = 0에서 시작

  return answer;
}


// dfs(0,0)
// ├─ +1 -> dfs(1,1)
// │   ├─ +1 -> dfs(2,2)
// │   │   ├─ +1 -> dfs(3,3)  (종료, 3 != 1)
// │   │   └─ -1 -> dfs(3,1)  (종료, 1 == 1 -> count++)
// │   └─ -1 -> dfs(2,0)
// │       ├─ +1 -> dfs(3,1)  (종료, 1 == 1 -> count++)
// │       └─ -1 -> dfs(3,-1) (종료, -1 != 1)
// └─ -1 -> dfs(1,-1)
//     ├─ +1 -> dfs(2,0)
//     │   ├─ +1 -> dfs(3,1)  (종료, 1 == 1 -> count++)
//     │   └─ -1 -> dfs(3,-1)
//     └─ -1 -> dfs(2,-2)
//         ├─ +1 -> dfs(3,-1)
//         └─ -1 -> dfs(3,-3)