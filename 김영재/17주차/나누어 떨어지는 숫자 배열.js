function solution(arr, divisor) {
  // divisor로 나누어 떨어지는 값만 필터링
  const result = arr.filter(num => num % divisor === 0);

  // 결과가 없으면 [-1] 반환
  if (result.length === 0) return [-1];

  // 오름차순 정렬 후 반환
  return result.sort((a, b) => a - b);
}