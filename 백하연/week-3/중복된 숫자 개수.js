/* 문제 설명
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는지 return
 */
function solution(array, n) {
  return array.filter((value) => value === n).length
}

console.log(solution([1, 1, 2, 3, 4, 5], 1))
console.log(solution([0, 2, 3, 4], 1))
