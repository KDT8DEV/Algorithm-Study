/* 문제 설명
 * 효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
 * (1칸, 1칸, 1칸, 1칸)
 * (1칸, 2칸, 1칸)
 * (1칸, 1칸, 2칸)
 * (2칸, 1칸, 1칸)
 * (2칸, 2칸)
 * 의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다.
 * 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 4가 입력된다면, 5를 return하면 됩니다.
 */

/**
 * 다이나믹 프로그래밍(Dynamic Programming, 동적계획법)
 */
function solution(n) {
  // n이 1이나 2일 때는 계산할 필요 없이 바로 1과 2를 반환
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prevprev = 1; // f(n-2)
  let prev = 2; // f(n-1)
  let current = 0;

  // 3부터 n까지 반복문 실행
  for (let i = 3; i <= n; i++) {
    // dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    current = (prevprev + prev) % 1234567;
    prevprev = prev;
    prev = current;
  }

  return prev;
}
console.log(solution(4)); // 5
console.log(solution(3)); // 3

// 다른 사람의 풀이
function other(n) {
  let answer = 0;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] % 1234567);
  }
  answer = dp[n];
  return answer % 1234567;
}
console.log(other(4));
console.log(other(3));
