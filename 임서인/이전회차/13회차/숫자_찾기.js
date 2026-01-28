function solution(num, k) {
  const str = String(num);
  const idx = str.indexOf(String(k));
  return idx === -1 ? -1 : idx + 1;
}
