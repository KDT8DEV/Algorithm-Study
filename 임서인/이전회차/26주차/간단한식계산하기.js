function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  if (op === '+') return +a + +b;
  if (op === '-') return +a - +b;
  if (op === '*') return +a * +b;
}

// 문제 풀이
// 공백 기준으로 나눠 a, 연산자, b를 구하고
// 연산자에 맞게 숫자로 변환 후 계산해서 반환함

// eval() 함수를 사용하면 더 간단하게 풀 수 있음
function solution(binomial) {
  return eval(binomial);
}

// eval()은 evaluate로 문자열로 된 표현식을 실제 코드로 계산해주는 함수
// 하지만 보안상 사용하지 않는 것이 좋음
