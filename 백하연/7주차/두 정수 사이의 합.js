/* 문제 설명
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
   예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
* 제한 조건
* a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
 */
function solution(a, b) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  let sum = 0
  for (let index = min; index <= max; index++) {
    if (min === max) {
      sum = min
      break
    }
    sum += index
  }
  return sum
}
solution(3, 5)
solution(3, 3)
solution(5, 3)
solution(-1, 2)
