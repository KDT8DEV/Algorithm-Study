/* 문제 설명
 * 경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다.
 * 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성
 */
function solution(k, tangerine) {
  const map = new Map()
  let counts = 0

  tangerine.forEach((size) => map.set(size, (map.get(size) || 0) + 1))

  const sizes = [...map.values()].sort((a, b) => b - a)

  for (let i = 0; i < sizes.length; i++) {
    if (k <= 0) break
    k -= sizes[i]
    counts++
  }
  return counts
}
solution(6, [1, 3, 2, 5, 4, 5, 2, 3]) // 3
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]) // 2
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]) // 1
