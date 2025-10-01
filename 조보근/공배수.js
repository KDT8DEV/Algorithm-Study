/* 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을,
 아니라면 0을 return하도록 solution 함수를 완성해주세요.
10 ≤ number ≤ 100
2 ≤ n, m < 10
*/

function solution(number, n, m) {
  var answer = 0;

  if (number % n == 0) {
    if (number % m == 0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/* 오 이거 신박한데?
 function solution(number, n, m) {
  return +!(number % n || number % m);
}
  */
