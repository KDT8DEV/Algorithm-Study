/* 문제 설명
 * 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
 * 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return
 */

function solution(num_list) {
  const even = num_list.filter((num) => num % 2 === 0).length
  const odd = num_list.filter((num) => num % 2 === 1).length
  return [even, odd]
}

/* 다른 사람의 풀이
 * reduce 사용

function solution(num_list) {
  const result = num_list.reduce(
    ([even, odd], cur) => [
      cur % 2 === 0 ? even + 1 : even,
      cur % 2 === 1 ? odd + 1 : odd,
    ],
    [0, 0]
  )
  console.log(result)
}
 */
solution([1, 2, 3, 4, 5])
solution([1, 3, 5, 7])
