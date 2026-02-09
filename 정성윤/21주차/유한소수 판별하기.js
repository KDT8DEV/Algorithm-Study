// # a/b를 기약분수로 만든 뒤, 분모의 소인수가 2와 5뿐인지 확인
function solution(a, b) {
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

  const g = gcd(a, b);
  let denom = b / g; // # 기약분수의 분모

  // # 분모에서 2 제거
  while (denom % 2 === 0) denom /= 2;
  // # 분모에서 5 제거
  while (denom % 5 === 0) denom /= 5;

  return denom === 1 ? 1 : 2;
}
