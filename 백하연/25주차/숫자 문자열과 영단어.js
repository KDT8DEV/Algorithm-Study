/*
 * 2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어
 * 문제: 숫자의 일부 자릿수가 영단어로 바뀌어진 문자열 s를 원래 숫자로 변환하여 return
 */

// replace: 문자열에서 특정 패턴을 찾아 다른 문자열로 바꾸고 싶을 때 아주 유용한 메서드 -> 가장 처음 나오는 패턴만 바꿔줌
// replaceAll: 문자열에서 특정 패턴을 모두 찾아 다른 문자열로 바꾸고 싶을 때 아주 유용한 메서드
// 찾을 대상 : 바꾸고 싶은 문자열이나 정규표현식
// 바꿀 내용 : 교체할 문자열
function solution(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numbers.forEach((number, i) => {
    s = s.replaceAll(number, i);
  });
  return +s;
}
console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7')); // 234567
console.log(solution('2three45sixseven')); // 234567
console.log(solution('123')); // 123

// 패턴을 미리 정의해두고 반복문으로 순서대로 처리하는 방식 - 치환(Mapping) 패턴
// 인덱스와 값이 1:1로 매칭될 때는 배열을 활용하는게 가장 깔끔.