// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right, result = 0) {
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) cnt++;
    }
    if (cnt % 2) result -= i;
    else result += i;
  }
  return result;
}

// 이중 for문을 통해 left부터 right까지의 약수를 구한 뒤
// 약수의 개수를 count하여 홀수면 - 짝수면 +하여 합산한다.
