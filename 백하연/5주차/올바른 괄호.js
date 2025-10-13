/* 문제 설명
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
 * '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성
 */

/*
* 문제풀이 1
function solution(s) {
  return s.startsWith('(') && s.endsWith(')')
}
*/

/** 문제풀이 2 */
function solution(s) {
  const stack = []
  for (const p of s) {
    if (p === '(') {
      stack.push(p)
    } else if (p === ')') {
      if (stack.length === 0) return false
      else stack.pop()
    }
  }

  return stack.length === 0
}

solution('()()')
solution('(())()')
solution(')()(')
solution('(()(')
