// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 1차 시도
function solution1(s) {
  return s
    .split('')
    .reduce(
      (arr, cur, i) => (i % 2 ? (arr += cur) : (arr += cur.toUpperCase())),
      ''
    );
}
// 띄어쓰기에 대한 대처가 없었음 한 알파벳마다의 대처였음

// 2차 시도
function solution2(s, result = '') {
  s.split(' ').forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      i % 2 ? (result += e[i]) : (result += e[i].toUpperCase());
    }
    result += ' ';
  });
  return result.trim();
}
// 홀수일 때 toLowerCase()를 해주지 않은 점
// 첫 문자열에 앞 뒤 공백이 있을 수 있는 점을 간과한 것

// 3차 시도
function solution3(s, result = '') {
  s.trim()
    .split(' ')
    .forEach((e) => {
      string.forEach((e) => {
        console.log(e);
        for (let i = 0; i < e.length; i++) {
          i % 2
            ? (result += e[i].toLowerCase())
            : (result += e[i].toUpperCase());
        }
      });
    });
  return result;
}
//에에~
// 아하 힌트를 보니까 공백들은 건드리지 말고 (trim()사용금지) 해야한다고 함

// 쪼개서 해보면 될 것 같음

function solution(s, result = '') {
  let string = s.split(' ');
  console.log(string);
  string.forEach((e, idx) => {
    console.log(e);
    for (let i = 0; i < e.length; i++) {
      if (i % 2) result += e[i].toLowerCase();
      else result += e[i].toUpperCase();
    }
    if (idx != string.length - 1) result += ' ';
  });
  return `"${result}"`;
}
// console.log(solution('  try hello world  '));

//통과해따~~~~
// 빈칸을 잘 챙기는 게 중요한ㄱ ㅓ였슴~

/// 신기한 코드

function toWeirdCase(s) {
  var result = '';

  for (var word of s.split(' ')) {
    for (var i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? 'toUpperCase' : 'toLowerCase']();
    }
    result += ' ';
  }

  return result.slice(0, -1);
}

function solutionW(s, result = '') {
  let string = s.split(' ');
  console.log(string);
  string.forEach((e, idx) => {
    console.log(e);
    for (let i = 0; i < e.length; i++) {
      result += e[i][i % 2 ? 'toLowerCase' : 'toUpperCase']();
    }
    if (idx != string.length - 1) result += ' ';
  });
  return `"${result}"`;
}
console.log(solutionW('  Wtry hello world  '));
