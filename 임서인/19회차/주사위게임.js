function solution(a, b, c) {
  const sum1 = a + b + c;
  const sum2 = a * a + b * b + c * c;
  const sum3 = a * a * a + b * b * b + c * c * c;
  const set = new Set([a, b, c]);

  if (set.size === 1) {
    return sum1 * sum2 * sum3;
  } else if (set.size === 2) {
    return sum1 * sum2;
  } else {
    return sum1;
  }
}
// Set을 사용하여 서로 다른 숫자의 개수를 확인하고 조건에 따라 계산
