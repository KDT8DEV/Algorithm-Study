function solution(signals) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  // a*b를 먼저 계산하면 오버플로우 발생할 수 있다고 함(나는 안났음), 나중에 *b

  const time = signals.map(([g, y, r]) => g + y + r);
  // 4 = [2,1,1] => 2+1+1
  // 7 = [5,1,1] => 5+1+1
  // time = [4,7]

  // 모든 신호등의 주기 = 최소공배수
  const total = time.reduce((acc, p) => lcm(acc, p), 1);
  // acc = 1, p = 4 => lcm(1,4) = 4
  // acc = 4, p = 7 => lcm(4,7) = 28
  // total = 28

  // 최소공배수 시간만큼 반복 -> 이 안에 없으면 영원히 없음
  for (let t = 1; t <= total; t++) {
    const allYellow = signals.every(([g, y, r]) => {
      const time = g + y + r;
      const now = (t - 1) % time; // 시간이 1부터 시작이므로 0으로 맞추기 위해 -1 // 구간확인
      return now >= g && now < g + y; // 노란불 구간이면 true
    });

    if (allYellow) return t;
  }

  return -1;
}

// 문제풀이
// 모든 신호등이 동시에 노란불이 되는 시간은 모든 신호등의 주기의 최소공배수



// 최대공약수와최소공배수.js
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}