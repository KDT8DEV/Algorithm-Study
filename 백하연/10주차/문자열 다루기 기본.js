/* 문제 설명
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴
 */

/* 풀이 1 → 테스트케이스 실패 ❌ */
/*
function solution(s) {
  return (s.length === 4 || s.length === 6) && !Number.isNaN(Number.parseInt(s))
}
*/

/* 풀이 2
 *  Number.parseInt()는 문자열 앞부분이 숫자면 변환한다.
 * 문자열 전체가 숫자인지 확인해야 함.
 */
function solution(s) {
  const regex = /\D/g
  return (s.length === 4 || s.length === 6) && s.match(regex) === null
}
solution('a1234')
solution('1234')
solution('123a')
solution('12b4')

/* 다른 사람의 풀이
 * 정규표현식 (캐릭터 클래스, 수량자 ) 사용하고 문자열이 패턴과 일치하는지 여부를 불리언으로 반환하는 test() 메서드 사용
 */
function other_solution(s) {
  const regex = /^\d{6}$|^\d{4}$/
  return regex.test(s)
}
other_solution('a1234')
other_solution('1234')
other_solution('123a')
other_solution('12b4')
