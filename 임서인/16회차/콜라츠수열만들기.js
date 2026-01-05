function solution(n) {
  const result = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    result.push(n);
  }

  return result;
}

// 입력된 정수 n에 대해 콜라츠 수열을 생성하여 배열로 반환하는 함수
// 콜라츠 수열은 n이 짝수일 때는 n을 2로 나누고
// 홀수일 때는 n에 3을 곱하고 1을 더하는 과정을 반복하여 생성되며
// 최종적으로 1에 도달할 때까지의 수열을 포함함
