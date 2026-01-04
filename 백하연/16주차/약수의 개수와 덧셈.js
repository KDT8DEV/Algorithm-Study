/*
  두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}

// 다른 사람의 풀이
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수이면 약수의 개수는 홀수
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
