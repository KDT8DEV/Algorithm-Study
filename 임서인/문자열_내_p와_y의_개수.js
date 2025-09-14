// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// https://school.programmers.co.kr/learn/courses/30/lessons/12916

//
// 아스키코드를 활용하여 풀고싶어졌다~

// ASCII코드에서 문자로 변환하는 법
// p의 아스키코드는 112, P는 80
// y의 아스키코드는 121, Y는 89
// String.fromCharCode(112) => 'p'

// 반대는 String.charCodeAt(0) => 112

// 내 코드
solution = (s, p = 0, y = 0) => {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 80 || s.charCodeAt(i) === 112) {
      p += 1;
    } else if (s.charCodeAt(i) === 89 || s.charCodeAt(i) === 121) {
      y += 1;
    }
  }
  return p === y ? true : false;
};

// 다른 사람 코드

// 1. toUpperCase() 활용
function numPY(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
// => 열등감과 분노,,,,, 넘 깔끔하다 ㅂㄷㅂㄷ

// 2. reduce 활용
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === 'p') return acc + 1;
    else if (cur === 'y') return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}

// => reduce 써보고 싶었는데 합산 값으로 멀 어쩌나 했더니,,

// 3. match 활용
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

// => 세상에 이런게 존재했었다니

// 내 코드에 적용
solution = (s) => {
  let answer = s
    .toUpperCase()
    .split('')
    .reduce((acc, cur) => {
      if (cur.charCodeAt(0) === 80) acc += 1;
      else if (cur.charCodeAt(0) === 89) acc -= 1;
      return acc;
    }, 0);
  return answer === 0 ? true : false;
};

// index 로 굳이 할 필요없이
// 어찌됐든 cur은 문자하나니까 cur.charCodAt(0)이 cur인거임
// 저거는 진짜 필요없지만? 함 써보고싶었던거!
