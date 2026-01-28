// https://school.programmers.co.kr/learn/courses/30/lessons/120818
// // lv.01
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// 1트
function solution1(price) {
  return price >= 500000
    ? price * 0.8
    : price >= 300000
    ? price * 0.9
    : price < 100000
    ? price
    : price * 0.95;
}

// 정답
function solution(price) {
  const over50 = Math.floor(price * 0.8);
  const over30 = Math.floor(price * 0.9);
  const over10 = Math.floor(price * 0.95);

  return price >= 500000
    ? over50
    : price >= 300000
    ? over30
    : price < 100000
    ? price
    : over10;
}

// + 소수점 이하를 버린 정수를 return합니다.
// + 객기로 한 줄로 작성했지만,, 아무래도 보기가 너무 구려서 보기쉽게 정리(삼항연산자는 포기할 수 없숴)

// 신기한 코드
function solution(price) {
  let [over50, over30, over10] = [price * 0.8, price * 0.9, price * 0.95];
  price =
    price >= 500000
      ? over50
      : price >= 300000
      ? over30
      : price < 100000
      ? price
      : over10;

  return ~~price;
}

// + 배열의 구조분해할당으로 값 넣고
// + 비트연산자 사용해서 price에 Math.floor처리하기
