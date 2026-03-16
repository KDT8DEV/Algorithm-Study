/** 노란불 신호등
 * 어떤 도로에 차량 신호등이 n개 있습니다.
 * 모든 신호등은 항상 초록불 → 노란불 → 빨간불 순서로 반복되며, 각 신호의 지속 시간은 신호등마다 다릅니다.
 * 시간은 1초부터 시작하며, 각 신호등은 처음에는 초록불 상태로 시작합니다.
 *
 * 이 도로에서는 가끔 정전이 일어나는데, 모든 신호등이 모두 노란불이 되면 정전이 발생한다는 사실이 밝혀졌습니다.
 *
 * 예를 들어 신호등이 2개이고, 각 신호등의 주기가 다음과 같다고 가정해 보겠습니다.
 *
 * 신호등	초록불	노란불	빨간불
 * 1번	2초	1초	2초
 * 2번	5초	1초	1초
 * 신호등-1.drawio.png
 *
 * 위 그림과 같이 13초에 처음으로 두 신호등이 모두 노란불이 됩니다.
 *
 * 신호등 n개의 신호 주기를 담은 2차원 정수 배열 signals가 매개변수로 주어집니다. 모든 신호등이 노란불이 되는 가장 빠른 시각(초)을 return 하도록 solution 함수를 완성해 주세요. 만약 모든 신호등이 노란불이 되는 경우가 존재하지 않는다면 -1을 return 해주세요.
 */
/*
// 문제풀이 1
function solution(signals) {
  let answer = 0;

  // for (let i = 0; i < signals.length; i++) {
  //   for (let j = 0; j < signals[i]; j++) {
  //     const first = signals[i][0] + signals[i][1]; // 첫 번째 노란불이 되는 시점
  //     const cycle = signals[i][0] + signals[i][1] + signals[i][2]; // 주기

  //     if (j === 0) {
  //       time.push(first);
  //     }
  //     time.push(first + cycle * j);
  //   }
  // }

  let firsts = [];
  let cycles = [];
  for (let i = 0; i < signals.length; i++) {
    const first = signals[i][0] + signals[i][1]; // 첫 번째 노란불이 되는 시점
    const cycle = signals[i][0] + signals[i][1] + signals[i][2]; // 주기

    firsts.push(first);
    cycles.push(cycle);
  }

  while (!firsts.every((v) => v === firsts[0])) {
    // 모든 신호등이 노란불이 되는 시점이 같아질 때까지 반복
    const min = Math.min(...firsts); // 가장 작은 시점
    firsts[firsts.indexOf(min)] = firsts[firsts.indexOf(min)] + cycles[firsts.indexOf(min)];
  }
  console.log(firsts);

  if (firsts[0] === firsts[1]) answer = firsts[0];

  return answer;
}
*/

// function isYellow(time, signal) {
//   const [green, yellow, red] = signal;
//   const cycle = green + yellow + red;
//   const pos = ((time - 1) % cycle) + 1; // 1초부터 시작하므로 1을 빼고 더해줌
//   return green + 1 <= pos && pos <= green + yellow;
// }

// function solution(signals) {
//   // 1. 첫 번째 신호등 정보 미리 계산
//   const [g1, y1, r1] = signals[0];
//   const cycle1 = g1 + y1 + r1;

//   // 2. 충분히 큰 시간까지 반복
//   // 'currCycleStart'는 각 주기의 시작점 (1, 1+cycle1, 1+cycle1*2...)
//   for (let currCycleStart = 1; currCycleStart <= 1000000; currCycleStart += cycle1) {
//     // 3. 첫 번째 신호등이 노란불인 '구간'만 반복해서 확인
//     // 노란불 시작: 초록불이 끝난 다음 초 (g1 + 1)
//     // 노란불 끝: 초록불 + 노란불까지의 초 (g1 + y1)
//     for (let t = currCycleStart + g1; t < currCycleStart + g1 + y1; t++) {
//       // 4. 이 't'초에 '모든' 신호등이 노란불인지 확인
//       // 이미 만든 isYellow(t, signal) 함수를 활용하세요!
//       if (signals.every((s) => isYellow(t, s))) {
//         return t;
//       }
//     }
//   }

//   // 5. 루프가 끝날 때까지 못 찾으면 -1
//   return -1;
// }

// 문제풀이3
function isYellow(time, signal) {
  const [green, yellow, red] = signal;
  const cycle = green + yellow + red;
  const pos = ((time - 1) % cycle) + 1;
  return green + 1 <= pos && pos <= green + yellow;
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(signals) {
  const [g1, y1, r1] = signals[0];
  const cycle1 = g1 + y1 + r1;

  const maxTime = signals.reduce((acc, s) => lcm(acc, s[0] + s[1] + s[2]), cycle1);

  for (let curCycleStart = 1; curCycleStart <= maxTime; curCycleStart += cycle1) {
    for (let t = curCycleStart + g1; t < curCycleStart + g1 + y1; t++) {
      if (signals.every((s) => isYellow(t, s))) {
        return t;
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [2, 1, 2],
    [5, 1, 1],
  ]),
); // 13
console.log(
  solution([
    [2, 3, 2],
    [3, 1, 3],
    [2, 1, 1],
  ]),
); // 11
console.log(
  solution([
    [3, 3, 3],
    [5, 4, 2],
    [2, 1, 2],
  ]),
); // 193
console.log(
  solution([
    [1, 1, 4],
    [2, 1, 3],
    [3, 1, 2],
    [4, 1, 1],
  ]),
); // -1
