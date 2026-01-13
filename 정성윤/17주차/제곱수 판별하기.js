function solution(n) {
  let sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? 1 : 2;
}