// https://school.programmers.co.kr/learn/courses/30/lessons/68935

//문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229

function solution(n) {
  let three = n.toString(3).split('').reverse();
  let answer = parseInt(three.join(''), 3);
  return answer;
}

// 짜잔 toString(숫자)를 사용하면 n진수로 변환할 수 있다는 거~(와아 놀라워요)
// parseInt(변환할값,몇진수에서?) n진수에서 10진수로 돌아올 땐 이런 방식이 있다는 거~~
// 와~ 신기해요
