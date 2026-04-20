function solution(n) {
  let count = 0;

  for (let start = 1; start <= n; start++) {
    let sum = start;
    for (let end = start + 1; sum < n; end++) {
      sum += end;
    }
    if (sum === n) count++;
  }

  return count;
}

// 풀이
// start를 1부터 n까지 순회하면서
// start부터 연속된 수를 더해 n이 되면 count++
// n을 초과하면 다음 start로 넘어감

// 테스트
// console.log(solution(15)); // 4  (1+2+3+4+5, 4+5+6, 7+8, 15)
// console.log(solution(1)); // 1
// console.log(solution(3)); // 2  (3, 1+2)
