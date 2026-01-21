function solution(dots) {
  const xs = dots.map(([x, y]) => x);
  const ys = dots.map(([x, y]) => y);

  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);

  return width * height;
}
