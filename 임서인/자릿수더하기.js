// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// https://school.programmers.co.kr/learn/courses/30/lessons/120906

solution = (n) => {
  return (n + '').split('').reduce((a, c) => a + Number(c), 0);
};
