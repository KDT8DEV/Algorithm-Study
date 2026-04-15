// 모든 도시에서 한번에 출발했을 때
// 운반시간이 짧은 순서대로 더하기
// 예를 들면 2번 마을이 1시간 걸렸으니까 그거부터 더해지겠지
// 그래서
// 4시간째가 된다면
// 금은 70kg, 은은 4kg이 충족되겠어
// 8시간이 되면 금은 140kg(목표치 충족됐으니 금 조달 완료시간 fix)
// 은이 완성될때까지 시간을 계속 더한다음에
// 완성되는 시간을 fix해서 max(금조달, 은조달) 큰 수를 return

// -> 금과 은이 동시에 있는 경우를 알 수 없음
// 1번 예제에서는 금7 -> 은7 -> 금3 은3 챙겼음

// 너무어렵다!!!!!!!!!!!

// 도시 하나가 정확히 X kg을 전달하는 데 걸리는 시간을 w[i], t[i]로 표현하면

// 예를 들어:
// w=7, t=10, X=10 kg → 몇 시간?
// w=2, t=1, X=500 kg → 몇 시간?

// 500%2해서 나머지가 0이면 (몫*(t*2))- t
// 나머지가 있으면 몫*(t*2)+t

// (Math.ceil(X/w) * 2 - 1) * t 로도 표현할 수 있어.

// 1번 예제에서 w=7, t=10, X=10kg
// (Math.ceil(10/7) * 2 - 1) * 10 = (2 * 2 - 1) * 10 = 30시간
// 2번 예제에서 w=2, t=1, X=500kg
// (Math.ceil(500/2) * 2 - 1) * 1 = (250 * 2 - 1) * 1 = 499시간

// 모든 트럭은 동시에 운행
// 답 = max(금 조달 완료 시간, 은 조달 완료 시간)
// 도시 i가 X kg을 전달하는 시간 = (2 * ceil(X / w[i]) - 1) * t[i]
// 금도 은도 같은 트럭에 같이 실을 수 있음

// 금이든 은이든, 총 kg만 같으면 시간은 똑같다!
// 각 도시 i가 총 X_i kg을 운반한다고 했을 때:

// X_i 중 얼마를 금으로, 얼마를 은으로 채울지는 시간에 안 영향 줌
// 단, 금은 g[i]까지, 은은 s[i]까지만 가능

// 각 도시의 X_i (총 운반량)를 어떻게 정해야, 전체 완료 시간이 최소가 될까?

// ─────────────────────────────────────────────

// ✅ 정답 코드 (이진 탐색 / Binary Search)
//
// 핵심 아이디어: "시간 T를 고정해두고, 그 시간 안에 금 a + 은 b를 전달할 수 있는지 체크"
//
// → 이진 탐색으로 가능한 가장 작은 T를 찾는다!
//
// T가 주어졌을 때 도시 i가 할 수 있는 배달 횟수:
//   trips_i = floor((T + t[i]) / (2 * t[i]))
//   (마지막 배달은 편도만 해도 되므로)
//
// 도시 i의 총 운반 가능 용량:
//   capacity_i = trips_i * w[i]
//
// T 시간 안에 금 a, 은 b 전달 가능 조건 (세 가지 모두 충족해야 함):
//   1. sum(min(g[i], capacity_i)) >= a   ← 금을 충분히 모을 수 있나?
//   2. sum(min(s[i], capacity_i)) >= b   ← 은을 충분히 모을 수 있나?
//   3. sum(min(g[i]+s[i], capacity_i)) >= a+b  ← 금+은 합쳐서 용량이 충분한가?
//      (한 도시가 금도 은도 있지만 용량이 부족할 수 있으므로 필요)

function solution(a, b, g, s, w, t) {
  const n = g.length;

  // 시간 T 안에 금 a, 은 b를 전달할 수 있는지 체크
  const canDeliver = (T) => {
    let totalGold = 0;
    let totalSilver = 0;
    let totalCombined = 0;

    for (let i = 0; i < n; i++) {
      // T 시간 안에 도시 i의 트럭이 몇 번 배달 가능?
      const trips = Math.floor((T + t[i]) / (2 * t[i]));
      // 도시 i의 총 운반 가능 용량
      const capacity = trips * w[i];

      totalGold += Math.min(g[i], capacity);
      totalSilver += Math.min(s[i], capacity);
      totalCombined += Math.min(g[i] + s[i], capacity);
    }

    return totalGold >= a && totalSilver >= b && totalCombined >= a + b;
  };

  // 정답(시간)에 대해 이진 탐색
  // 최댓값: 도시 하나가 w=1, t=1e5로 1e9 kg을 혼자 다 나르는 최악의 경우 ≈ 2e14
  let left = 0;
  let right = 2 * 10 ** 14;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canDeliver(mid)) {
      right = mid; // mid로 가능하면 더 줄여보기
    } else {
      left = mid + 1; // mid로 불가능하면 더 늘려야 함
    }
  }

  return left;
}

function solution(a, b, g, s, w, t) {
  const n = g.length;

  // 도시 i가 총 X kg을 전달하는 데 걸리는 시간
  // 금/은 구분 없이 총량만으로 결정됨
  const calcTime = (X, wi, ti) => {
    if (X <= 0) return 0;
    return (2 * Math.ceil(X / wi) - 1) * ti;
  };

  // 각 도시가 운반할 금/은의 양 결정 ← 핵심 미결 문제!
  // 아래 조건을 만족하면서 전체 완료 시간이 최소가 되어야 함:
  //   - sum(goldFrom[i]) >= a
  //   - sum(silverFrom[i]) >= b
  //   - goldFrom[i] <= g[i]
  //   - silverFrom[i] <= s[i]
  const goldFrom = new Array(n).fill(0);
  const silverFrom = new Array(n).fill(0);

  // TODO: goldFrom, silverFrom을 어떻게 결정할까?

  // 모든 트럭 동시 운행 → 완료 시간 = 가장 늦게 끝나는 도시의 시간
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const totalKg = goldFrom[i] + silverFrom[i];
    answer = Math.max(answer, calcTime(totalKg, w[i], t[i]));
  }

  return answer;
}


// 이진 탐색을 써야하는 타이밍

// -> 최솟값/최댓값을 구해라
// 특정 값이 주어지면 조건 만족 여부를 알 수 있음
//   → "가장 빠른 시간을 구해라" (최솟값)
//   → "시간 T가 주어지면 가능한지 체크할 수 있다" (canDeliver)
//   → 이진 탐색!