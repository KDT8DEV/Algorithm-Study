// 시간 내 풀이가 어려워서!! 학습하는 시간을 가졌습니다!!!
function solution(info, n, m) {
  // dp = Map { b_trace: a_trace의 최솟값 }
  // B의 흔적이 b_trace일 때, A가 남길 수 있는 최소 흔적
  let dp = new Map();
  dp.set(0, 0); // 초기 상태:  아무 물건도 훔치지 않음

  // 각 물건 순회
  for (let i = 0; i < info.length; i++) {
    const [a_trace, b_trace] = info[i];
    const new_dp = new Map();

    // 현재 상태에서 다음 물건 처리
    for (let [b_total, a_total] of dp.entries()) {
      // 경우 1: A도둑이 현재 물건을 훔침
      if (a_total + a_trace < n) {
        const new_b = b_total;
        const new_a = a_total + a_trace;

        if (!new_dp.has(new_b) || new_dp.get(new_b) > new_a) {
          new_dp.set(new_b, new_a);
        }
      }

      // 경우 2: B도둑이 현재 물건을 훔침
      if (b_total + b_trace < m) {
        const new_b = b_total + b_trace;
        const new_a = a_total;

        if (!new_dp.has(new_b) || new_dp.get(new_b) > new_a) {
          new_dp.set(new_b, new_a);
        }
      }
    }

    dp = new_dp;

    // 모든 물건을 처리할 수 없는 경우
    if (dp.size === 0) {
      return -1;
    }
  }

  // 결과:  가능한 모든 상태 중 A의 흔적이 최소인 경우
  if (dp.size === 0) {
    return -1;
  }

  return Math.min(...dp.values());
}
