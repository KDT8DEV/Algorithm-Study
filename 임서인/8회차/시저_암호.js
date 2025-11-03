// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 첫번째 풀이
function solution1(s, n, result = '') {
  s.split('').forEach((e) => {
    if (e == ' ') result += e;
    else if (e == 'Z' || e == 'z')
      result += String.fromCharCode(e.charCodeAt() - 26 + n);
    else result += String.fromCharCode(e.charCodeAt() + n);
  });
  return result;
}
// 문제 난독 이슈로 +n이 기준 값 이상을 가질 거라는 걸 몰랐음

// 두 번째 풀이
function solution2(s, n, result = '') {
  s.split('').forEach((e) => {
    if (e == ' ') result += e;
    else if (e.charCodeAt() + n >= 25)
      result += String.fromCharCode(e.charCodeAt() - 26 + n);
    else result += String.fromCharCode(e.charCodeAt() + n);
  });
  return result;
}
// 차이값이 25이상이면을 말하고 싶었던 것 같은데 코드 오류로 실패

// 세 번째 풀이
function solution3(s, n, result = '') {
  s.split('').forEach((e) => {
    let index = e.charCodeAt();
    let over = parseInt(index + n - 26);
    if (e == ' ') result += e;
    else if (index <= 90 && index + n >= 90)
      result += String.fromCharCode(over);
    else if (index > 90 && index + n >= 122)
      result += String.fromCharCode(over);
    else result += String.fromCharCode(index + n);
    console.log(result);
  });
  return result;
}
// 기준 범위를 정하고

function solution(s, n) {
  return [...s]
    .map((ch) => {
      if (ch === ' ') {
        return ' ';
      } else if (/[A-Z]/.test(ch)) {
        return String.fromCharCode(65 + ((ch.charCodeAt(0) - 65 + n) % 26));
      } else if (/[a-z]/.test(ch)) {
        return String.fromCharCode(97 + ((ch.charCodeAt(0) - 97 + n) % 26));
      }
      return ch;
    })
    .join('');
}

// 정규표현식으로 범위를 정하고(알파벳 대문자, 소문자)
// charCodeAt으로 26울 넘지 않는 범위에서 return 해준뒤 join
