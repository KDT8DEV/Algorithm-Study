/* 문제 설명
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return
 */
function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return [...my_string].filter((s) => (vowels.includes(s) ? '' : s)).join('')
}

/* 다른 사람의 풀이
 * replace 메서드와 정규표현식으로 해결할 수 있었다...

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '')
}
 */
console.log(solution('bus'))
console.log(solution('nice to meet you'))
