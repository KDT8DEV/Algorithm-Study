/* 문제 설명
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환
 */
function solution(n, m) {
  let a = n;
  let b = m;
  // 최대공약수 : 두 수를 나누어떨어뜨리는 가장 큰 수
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  const gcd = a;
  // 최소공배수 : 두 수의 배수 중에서 가장 작은 공통 배수
  const lcm = (n * m) / gcd;

  console.log(gcd, lcm);
  return [gcd, lcm];
}
solution(3, 12); // [3, 12]
solution(2, 5); // [1, 10]
