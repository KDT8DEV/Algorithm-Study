function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map((v) => v * k);
  } else {
    return arr.map((v) => v + k);
  }
}
// 함수설명
// k가 홀수일 경우 배열의 각 요소를 k배하고, 짝수일 경우 배열의 각 요소에 k를 더합니다.
