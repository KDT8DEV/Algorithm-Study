/*
 * 자연수 뒤집어 배열로 만들기
 * n을 문자열로 변환 -> 쪼개기 -> 뒤집기 -> 숫자로 변환
 */
function solution(n) {
  return String(n).split('').reverse().map(Number);
}
console.log(solution(12345));
