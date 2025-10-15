/* 문제 설명
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
 * 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
 */
function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const date = new Date(2016, a - 1, b).getDay()
  return days[date]
}
// 0 일요일, 1 월요일, 2 화요일, 3 수요일, 4 목요일, 5 금요일, 6 토요일
solution(1, 1)
solution(5, 24)
