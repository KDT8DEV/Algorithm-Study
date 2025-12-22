function solution(x) {
  // 자릿수 합 구하기
  const sum = String(x)
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);

  // 나누어 떨어지는지 확인
  return x % sum === 0;
}