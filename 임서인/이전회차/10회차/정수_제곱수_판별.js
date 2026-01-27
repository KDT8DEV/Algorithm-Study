// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  return Number.isInteger(Math.sqrt(n))? (Math.sqrt(n)+1)*(Math.sqrt(n)+1):-1;
}

// 제곱근이면 +1해서 제곱
//아니면 -1을 리턴
// Math.sqrt를 이용해 제곱근을 판별한다