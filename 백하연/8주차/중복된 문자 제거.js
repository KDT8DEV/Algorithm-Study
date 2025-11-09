/* 문제 설명
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return
 */
function solution(my_string) {
  return [...new Set(my_string)].join('')
}
solution('people')
solution('We are the world')
