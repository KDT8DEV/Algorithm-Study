/* 문제 설명
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
 * i! ≤ n
 */

// n보다 작거나 같은 가장 큰 팩토리얼을 만드는 수
// 예 ) n = 7 일때, 3!(3*2*1=6)은 7보다 작고, 4!(4*3*2*1=24)는 7보다 크므로 답은 3이 된다.

function solution(n) {
  let i = 1 // 현재 확인하고 있는 숫자
  let factorial = 1 // 현재까지의 팩토리얼 값

  // i = 1, factorial = 1 => 1 * 2 <= 7
  // i = 2, factorial = 2 => 2 * 3 <= 7
  // i = 3, factorial = 6 => 6 * 4 < 7
  // return 3
  while (factorial * (i + 1) <= n) {
    i++
    factorial *= i
  }

  return i
}

console.log(solution(3628800))
console.log(solution(7))
