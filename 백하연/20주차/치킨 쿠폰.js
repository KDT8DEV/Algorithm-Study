/* 문제 설명
 * 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
 * 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
 * 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
 */
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    const service = Math.floor(coupon / 10); // 서비스 치킨 수
    const remainder = coupon % 10; // 남은 쿠폰 수

    answer += service;
    coupon = service + remainder;
  }

  return answer;
}
console.log(solution(100)); // 11
console.log(solution(1081)); // 120

function other(chicken) {
  // 반복문 없이 수학적인 원리를 이용해 한 번에 답을 구하는 방법
  // 실질적으로 서비스 치킨 1마리를 얻기 위해 소모되는 쿠폰은 9장 (10-1=9)
  // 왜 (chicken - 1)인가? -> 서비스 치킨을 받기 위한 최소 조건은 여전히 쿠폰 10장이기 때문

  // Math.floor((100 - 1) / 9) = Math.floor(99 / 9) = 11
  // Math.floor((1081 - 1) / 9) = Math.floor(1080 / 9) = 120
  return Math.floor((chicken - 1) / 9);
}
console.log(other(100)); // 11
console.log(other(1081)); // 120
