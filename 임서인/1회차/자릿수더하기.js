// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// https://school.programmers.co.kr/learn/courses/30/lessons/120906

solution = (n) => {
  return (n + '').split('').reduce((a, c) => a + Number(c), 0);
};

// (n + '') js를 문자열 형식으로 만들기 (split은 문자열을 쪼개주는 함수)
// split 배열을 ""기준으로 쪼개기
// reduce는 누적값을 return 하는 함수로 숫자 a는 누적값 c 는 현재값
// ,0은 acc를 0으로 초기화한다는 뜻입니다.
