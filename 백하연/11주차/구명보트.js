/* 문제 설명
 * 최대 2명씩만 탈 수 있음
 * 무게 제한이 있음
 * 보트 개수를 최소화해야 함
 */
function solution(people, limit) {
  people.sort((a, b) => a - b) // 50, 50, 70, 80

  let left = 0 // 가장 가벼운 사람
  let right = people.length - 1 // 가장 무거운 사람
  let count = 0

  while (left <= right) {
    if (people[left] + people[right] > limit) {
      // 50 + 80 > 100 -> 무거운 사람만 태운다
      right--
      count++
    } else {
      // 50 + 50 <= 100 -> 두 사람 모두 태운다.
      left++
      right--
      count++
    }
  }
  return count
}
solution([70, 50, 80, 50], 100)
solution([70, 80, 50], 100)
