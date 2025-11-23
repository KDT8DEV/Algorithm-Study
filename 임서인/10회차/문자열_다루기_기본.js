//https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const rex = /^\d{6}$|^\d{4}$/;
  return rex.test(s);
}

function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}

// 정규식을 이용하여 숫자4,6자이면 true를 반환한다.
// !isNaN(s)을 통해 숫자가 아니지 않은 것을 반환
