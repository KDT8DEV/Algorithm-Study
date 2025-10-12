/* 문제 설명
 * 선분 세개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 한다.
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
 *  삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return
 */
function solution(sides) {
  sides.sort((a, b) => a - b)

  return sides[2] < sides[0] + sides[1] ? 1 : 2
}

console.log(solution([1, 2, 3])) // 1+2 === 3 => 2
console.log(solution([3, 6, 2])) // 3+2 < 6 => 1
console.log(solution([199, 72, 222])) // 271 > 222 => 2

/* 정확성 테스트 실패 */
// function solution(sides) {
//   const max = Math.max(...sides)
//   const others = sides.filter((side) => side !== max).reduce((a, b) => a + b, 0)
//   console.log(max, others)
//   return max < others ? 1 : 2
// }
