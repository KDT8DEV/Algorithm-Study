/* 약수의 합
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해 보세요.
 */
function solution(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) result.push(i);
    else continue;
  }
  return result.reduce((acc, cur) => acc + cur, 0);
}

// 풀이 개선
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result += i;
    else continue;
  }
  return result;
}
console.log(solution(12));
console.log(solution(5));

// 핵심 패턴 : 1부터 n까지 완전탐색 + 조건 만족할 때 누적
// 약수 찾기, 소수 찾기, 특정 배수 합산
