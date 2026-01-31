/* 문제 설명
 * 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
 */
function solution(s) {
  return parseInt(s);
}
console.log(solution('1234'));
console.log(solution('-1234'));

function other(s) {
  // -, *, /, % (+ 제외) 등의 연산자는 피연산자가 문자열이어도 숫자로 변환 가능한 형태라면 숫자로 바꾼 뒤 연산 수행
  console.log(s / 1, typeof s, typeof (s / 1));

  return s / 1;
}
console.log(other('1234'));
console.log(other('-1234'));
