// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, str = '') {
  let arr = my_string.split('');
  arr.forEach((e) => {
    const code = e.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      e = e.toLowerCase();
      console.log(e);
    } else {
      e = e.toUpperCase();
      console.log(e);
    }
    str += e;
  });
  return str;
}

// 아스키코드집착녀가되

// 맘드 다 사
function solution(my_string) {
  var answer = '';
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

//c === c.toLowerCase()
