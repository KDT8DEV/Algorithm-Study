/*
 * 문자 반복 출력하기
 * my_string의 각 문자를 n번씩 반복한 문자열 반환
 */
function solution(my_string, n) {
  return my_string
    .split('')
    .map((v) => v.repeat(n))
    .join('');
}
console.log(solution('hello', 3)); // "hhheeellllllooo"
