/** 문제 설명
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
