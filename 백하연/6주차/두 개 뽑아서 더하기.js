/* 문제 설명
 * 정수 배열 numbers가 주어집니다.
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return
 */
function solution(numbers) {
  const set = new Set()

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j])
    }
  }

  return [...set].sort((a, b) => a - b)
}

solution([2, 1, 3, 4, 1])
solution([5, 0, 2, 7])
