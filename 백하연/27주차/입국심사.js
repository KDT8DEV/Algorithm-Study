/*
 * 입국심사
 * n명이 입국심사를 기다리고 있습니다. 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 *
 * 제한사항:
 * - 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
 * - 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
 * - 심사관은 1명 이상 100,000명 이하입니다.
 *
 * 입출력 예:
 * n: 6, times: [7, 10] => return 28
 */
function solution(n, times) {
  let answer = 0;

  let min = 1; // 가장 빨리 심사할 수 있는 시간
  let max = Math.max(...times) * n; // 가장 오래 걸리는 심사관 * 모든 사람의 수 = 가장 오래 걸리는 시간

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    const total = times.reduce((acc, time) => acc + Math.floor(mid / time), 0); // mid 시간 동안 심사할 수 있는 사람의 총 수

    // 현재 시간(mid)으로 충분히 모든 사람을 심사할 수 있는지 확인
    if (total >= n) {
      // n명 이상 심사 가능 -> 시간을 줄여야 함
      max = mid - 1;
      answer = mid;
    } else {
      // n명 심사 불가능 -> 시간을 늘려야 함
      min = mid + 1;
    }
  }

  return answer;
}
console.log(solution(6, [7, 10]));

/*
n = 6, times = [7, 10]
min = 1, max = 10 * 6 = 60, answer = 0

회차 min max mid  total  total >= n  answer   다음범위
1   1   60  30   4+3=7   true       30     max = 29
2   1   29  15   2+1=3   false      30     min = 16
3   16  29  22   3+2=5   false      30     min = 23
4   23  29  26   3+2=5   false      30     min = 27
5   27  29  28   4+2=6   true       28     max = 27
6   27  27  27   3+2=5   false      28     min = 28 -> 조건(28 <= 27) 거짓으로 종료

*/
