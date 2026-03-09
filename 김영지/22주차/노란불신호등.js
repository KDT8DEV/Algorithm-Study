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

const periods = signals.map(([g, y, r]) => g + y + r);
console.log(periods);
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
