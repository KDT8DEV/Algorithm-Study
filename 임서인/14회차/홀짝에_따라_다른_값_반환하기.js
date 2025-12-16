function solution(n, sum = 0) {
  for (let i = 1; i <= n; i++) {
    if (n % 2 == 0) {
      if (i % 2 == 0) {
        sum += i * i;
      }
    } else {
      if (i % 2 == 1) {
        sum += i;
      }
    }
  }
  return sum;
}
// 짝수일 때는 1부터 n까지의 짝수의 제곱의 합을 구하고
// 홀수일 때는 1부터 n까지의 홀수의 합을 구하는 함수