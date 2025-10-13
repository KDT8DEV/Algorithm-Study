/* 양의 정수 n이 매개변수로 주어질때, n이 홀수라면 n이하의 홀수인 모든 양의 정수의 합을 return하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return하는 solution 함수를 작성해주세요.
 */

function solution(n) {
  var answer = 0;
  if (n % 2 == 1) {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
     
    }
  } else if (n % 2 == 0) {
    for (let i = 0; i <= n; i += 2) {
      answer = answer + i ** 2;
      
    }
  }

  return answer;
}
