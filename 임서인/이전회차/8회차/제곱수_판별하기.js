// https://school.programmers.co.kr/learn/courses/30/lessons/120909
// MediaQueryListEvent.01
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// Math객체 내장함수인 sqrt를 통해 제곱근을 구하고
// Number객체 내장함수인 isInteger를 통해
// 해당 제곱근이 정수인지 판별하여 참이면 1 거짓이면 2를 return한다
