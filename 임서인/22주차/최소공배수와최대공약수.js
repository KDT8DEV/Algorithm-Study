function solution(n, m) {
  const g = gcd(n, m);
  const l = (n * m) / g;
  return [g, l];
}
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// 문제 풀이
// g로 최대공약수를 정의하고
// l로 최소공배수를 정의하고
// gcd로 최대공약수를 찾고
// l로 최소공배수를 찾고
// [g, l]를 반환
