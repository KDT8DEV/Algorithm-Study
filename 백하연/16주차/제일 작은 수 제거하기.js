/*
 * 정수를 저장한 배열, arr에서 가장 작은 수를 제거한 배열을 리턴하는 함수
 * 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
 */
function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min(...arr);
  return arr.filter((num) => num !== min);
}

// 다른 사람의 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
