// 문제 설명
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n, numlist) {
  return numlist.filter((num) => !(num % n));
  // num%n == 1이상이면 true 0이면 false이기 떄문에
  // 반대로 배수를 출력
}

// 이제 이정도는 모 쉽다 우하하 함수에 친해진 것 같아서 기쁘다
// 스터디하면서 실력이 많이 늘어난 것 같다!! 단기간 급상승!!!
// 기쁘다!!
