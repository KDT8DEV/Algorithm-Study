/** 둘만의 암호
 * 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.
 * 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
 * index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
 * skip에 있는 알파벳은 제외하고 건너뜁니다.
 */
function solution(s, skip, index) {
  // s = "aukks", skip = "wbqd", index = 5, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 b와 d는 skip에 포함되므로 세지 않는다. 따라서 b, d를 제외하고 a에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 h가 된다.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  let alphabetWithoutSkip = alphabet
    .split('')
    .filter((char) => !skip.includes(char))
    .join('');

  for (let i = 0; i < s.length; i++) {
    const currentIndex = alphabetWithoutSkip.indexOf(s[i]);
    // index만큼 뒤로 이동 (리스트 길이를 넘어갈 경우를 대비해 나머지를 사용)
    const nextIndex = (currentIndex + index) % alphabetWithoutSkip.length;
    answer += alphabetWithoutSkip[nextIndex];
  }
  return answer;
}
console.log(solution('aukks', 'wbqd', 5)); // "happy"

// 다른 사람의 풀이
function other(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((x) => !skip.includes(x));

  return s
    .split('')
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join('');
}
