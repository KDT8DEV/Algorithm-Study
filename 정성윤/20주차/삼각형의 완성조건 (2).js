function solution(sides) {
  // # 두 변을 a, b로 두고, 삼각형 성립 조건은 |a-b| < x < a+b (x는 정수)
  const [a, b] = sides;
  const minX = Math.abs(a - b) + 1; // # 가능한 x의 최솟값(정수)
  const maxX = a + b - 1;           // # 가능한 x의 최댓값(정수)

  // # [minX, maxX] 구간의 정수 개수
  return Math.max(0, maxX - minX + 1);
}
