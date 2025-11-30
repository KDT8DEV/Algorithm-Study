function solution(numbers) {
  numbers.sort((a, b) => b - a);
  console.log(numbers);
  let [a, b] = numbers.splice(0, 2);
  let [c, d] = numbers.splice(numbers.length - 2, numbers.length);
  return c * d > a * b ? c * d : a * b;
}

//
// 문제풀이
// numbers 배열을 내림차순 정렬
// splice 로 가장 큰 수 두 개와 가장 작은 수 두 개 추출
// 두 수의 곱을 비교해 더 큰 값 리턴
// 배열의 요소가 애초에 두 개라면 [c,d] 배열이 비어있을 수 있어서
// c,d가 NaN이 되는 경우의 비교문은 무조건 false를 반환하기 때문에
// false의 자리에 a*b를 넣어줌
