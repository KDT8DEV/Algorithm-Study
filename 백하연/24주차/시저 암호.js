/* 시저 암호
 *
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 *
 * 제한 조건
 * 공백은 아무리 밀어도 공백입니다.
 * s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 * s의 길이는 8000이하입니다.
 * n은 1 이상, 25이하인 자연수입니다.
 */

// 핵심 패턴 : 문자열 처리 - split → map(아스키코드 변환 + % 26으로 범위 순환) → join
// 복기 : split → map → join 문자열을 하나씩 변환할 때, % N (나머지 연산)으로 범위를 순환이 필요할 때 (범위를 벗어나면 처음으로 돌아가야 할 때) 자주 나오는 패턴입니다. 이번 문제에서는 알파벳이 26글자이므로 % 26을 활용해서 범위를 순환할 수 있습니다.
function solution(s, n) {
  const ALPHABET_SIZE = 26;
  const UPPERCASE_BASE = 65;
  const LOWERCASE_BASE = 97;

  return s
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);

      if (char === ' ') return ' ';

      if (char === char.toUpperCase()) {
        return String.fromCharCode(((code - UPPERCASE_BASE + n) % ALPHABET_SIZE) + UPPERCASE_BASE);
      } else {
        return String.fromCharCode(((code - LOWERCASE_BASE + n) % ALPHABET_SIZE) + LOWERCASE_BASE);
      }
    })
    .join(''); // 5. 바뀐 문자들을 모두 합쳐서 문자열로 리턴한다.
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
