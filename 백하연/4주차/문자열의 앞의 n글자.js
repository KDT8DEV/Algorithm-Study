/**
 * 문제 설명
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return
 */
function solution(my_string, n) {
  return my_string.slice(0, n)
}

solution('ProgrammerS123', 11)
solution('He110W0r1d', 5)
