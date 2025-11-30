/* 문제 설명
 * 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다
 * 이 놀이기구의 원래 이용료는 price원인데, 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
 * 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
 * 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
 * 단, 금액이 부족하지 않으면 0을 리턴하세요.
 */
// 풀이 1
function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return total > money ? total - money : 0;
}
console.log(solution(3, 20, 4)); // 10

// 풀이 2 - reduce 사용
function solution(price, money, count) {
  const total = [...Array(count)].reduce((prev, _, index) => {
    return prev + price * (index + 1);
  }, 0);
  return total > money ? total - money : 0;
}
console.log(solution(3, 20, 4));
