/**문제 설명
어떤 도로에 차량 신호등이 n개 있습니다. 
모든 신호등은 항상 초록불 → 노란불 → 빨간불 순서로 반복되며, 각 신호의 지속 시간은 신호등마다 다릅니다. 
시간은 1초부터 시작하며, 각 신호등은 처음에는 초록불 상태로 시작합니다.
이 도로에서는 가끔 정전이 일어나는데, 모든 신호등이 모두 노란불이 되면 정전이 발생한다는 사실이 밝혀졌습니다.
신호등 n개의 신호 주기를 담은 2차원 정수 배열 signals가 매개변수로 주어집니다. 
모든 신호등이 노란불이 되는 가장 빠른 시각(초)을 return 하도록 solution 함수를 완성해 주세요. 
만약 모든 신호등이 노란불이 되는 경우가 존재하지 않는다면 -1을 return 해주세요.
 */

/**나의 풀이 */
// 1. 각 신호등 period 구하기
// 2. period들의 LCM 구하기
// 3. 1 ~ LCM 까지 시간 돌기
// 4. 매 시간마다 모든 신호등 노란불인지 체크
function solution(signals) {
  const periods = signals.map(([g, y, r]) => g + y + r);

  // 최대공약수
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  // 최소공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);
  // 최대 시간
  const maxTime = periods.reduce((acc, curr) => lcm(acc, curr));

  for (let t = 1; t < maxTime; t++) {
    let allYellow = true;

    for (let [g, y, r] of signals) {
      const period = g + y + r;
      const time = (t - 1) % period;
      if (!(time >= g && time < g + y)) {
        allYellow = false;
        break;
      }
    }

    if (allYellow) return t;
  }

  return -1;
}

//===============================================//
let signals = [
  [2, 3, 2],
  [3, 1, 3],
  [2, 1, 1],
]; // 11

// 각 신호등의 전체 주기(period) 계산
// period = 초록 + 노랑 + 빨강
const periods = signals.map(([g, y, r]) => g + y + r);
console.log(periods);

// 최대공약수(GCD) - 유클리드 호제법
// a와 b의 공통 약수 중 가장 큰 값
// ex) gcd(12, 18) = 6
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

// 최소공배수(LCM)
// 두 수의 공통 배수 중 가장 작은 값
// 공식: LCM(a, b) = (a * b) / GCD(a, b)
const lcm = (a, b) => (a * b) / gcd(a, b);

// 모든 신호등이 "같은 상태로 반복되는 시점" = 전체 주기
// → LCM(period1, period2, ...)
// 이 시간까지만 보면 이후는 패턴이 반복됨
const maxTime = periods.reduce((acc, curr) => lcm(acc, curr));

// 시간 t를 1초부터 maxTime까지 순회
// (문제에서 시간은 1초부터 시작하는 점이 중요)
for (let t = 1; t < maxTime; t++) {
  let allYellow = true; // 모든 신호등이 노란불인지 체크하는 변수

  // 각 신호등 상태 확인
  for (let [g, y, r] of signals) {
    const period = g + y + r;

    // 현재 시간이 주기에서 어디 위치인지 계산
    // (t-1) 하는 이유:
    // t=1일 때 index=0 (초기 상태: 초록불 시작)
    const time = (t - 1) % period;

    // 노란불 조건:
    // 초록(g) 이후 ~ 노랑(y) 구간
    // 즉, g <= time < g + y
    if (!(time >= g && time < g + y)) {
      allYellow = false; // 하나라도 노란불이 아니면 실패
      break;
    }
  }

  // 모든 신호등이 노란불이면 해당 시간 반환
  if (allYellow) return t;
}

// 끝까지 못 찾으면 그런 시간은 존재하지 않음
return -1;
