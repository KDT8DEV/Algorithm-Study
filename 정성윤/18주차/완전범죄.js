function solution(info, n, m) {

  // # dp[b] = B 흔적 합이 b일 때 가능한 A 흔적 합의 최솟값
  let dp = Array(m).fill(Infinity);
  dp[0] = 0;

  for (const [aCost, bCost] of info) {
    const next = Array(m).fill(Infinity);

    for (let b = 0; b < m; b++) {
      if (dp[b] === Infinity) 
        continue;
      // 1) 이번 물건을 A가 훔침: B는 그대로, A만 증가
      const aSum = dp[b] + aCost;
      if (aSum < n) {
        next[b] = Math.min(next[b], aSum);
      }

      // 2) 이번 물건을 B가 훔침: A는 그대로, B만 증가
      const bSum = b + bCost;
      if (bSum < m) {
        next[bSum] = Math.min(next[bSum], dp[b]);
      }
    }

    dp = next;
  }

  // # 모든 물건 처리 후, 가능한 경우들 중 A의 최소값
  let ans = Infinity;
  for (let b = 0; b < m; b++) {
    ans = Math.min(ans, dp[b]);
  }
    
  return ans === Infinity ? -1 : ans;
}
