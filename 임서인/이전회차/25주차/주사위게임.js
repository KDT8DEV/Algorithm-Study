function solution(a, b) {
  const isAOdd = a % 2 !== 0;
  const isBOdd = b % 2 !== 0;

  if (isAOdd && isBOdd) {
    return a * a + b * b;
  } else if (isAOdd || isBOdd) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

// 1. a와 b가 모두 홀수 → (a² + b²) 반환
// 2. a 또는 b가 홀수 → 2 × (a + b) 반환
// 3. a와 b가 모두 짝수 → |a - b| 반환
