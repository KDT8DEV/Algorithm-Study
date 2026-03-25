function solution(sizes) {
  let width = -Infinity;
  let height = -Infinity;
  sizes.forEach(([w, h]) => {
    const big = Math.max(w, h);
    const small = Math.min(w, h);
    width = Math.max(big, width);
    height = Math.max(small, height);
  });
  return width * height;
}

// 카드의 긴 부분끼리 비교 짧은 부분끼리 비교해서 가장 작은 사각형의 넓이를 구함
// 챗지피티 조언
// max min 말고 width height가 더 좋은 방향
// 최소값이 정해져있기때문에 Infinity보다 0이 나은 방향
