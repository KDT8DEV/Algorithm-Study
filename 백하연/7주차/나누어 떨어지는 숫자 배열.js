/* 문제 설명
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 */
function solution(arr, divisor) {
  const divided = arr
    .filter((value) => value % divisor === 0)
    .sort((a, b) => a - b)
  return divided.length ? divided : [-1]
}
solution([5, 9, 7, 10], 5)
solution([2, 36, 1, 3], 1)
solution([3, 2, 6], 10)
