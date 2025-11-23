// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// lv.01

// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    if (signs[idx]) {
      return acc + cur;
    } else {
      return acc - cur;
    }
  }, 0);
}

// acc에 초기값을 설정하지 않아서 틀렸었음
// reduce를 이용하여 true면 양수 계산 false면 음수계산함다.
