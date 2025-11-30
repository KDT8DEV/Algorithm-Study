/* 문제 설명
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하느 함수를 완성
 */
function solution(s) {
  const words = s.split(' ');

  return words
    .map((word) => {
      return word
        .split('')
        .map((char, index) => {
          if (index % 2 !== 0) return char.toLowerCase();
          return char.toUpperCase();
        })
        .join('');
    })
    .join(' ');
}
console.log(solution('try hello world'));
