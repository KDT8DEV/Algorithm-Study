function solution(n) {
  const small = [];
  const large = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      small.push(i);           // # 작은 약수
      if (i !== n / i) {
        large.push(n / i);     // # 대응되는 큰 약수
      }
    }
  }

  return small.concat(large.reverse());
}