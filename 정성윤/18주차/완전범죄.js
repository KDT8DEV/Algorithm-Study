function solution(info, n, m) {

  // # dp[b] = B 흔적 합이 b일 때 가능한 A 흔적 합의 최솟값
  let dp = Array(m).fill(Infinity);
  dp[0] = 0;

  for (const [aCost, bCost] of info) {
    //dp에 반영하면 두번 훔치는것처럼 될수 있기 때문에
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
// info	n	m	result
// [[1, 2], [2, 3], [2, 1]]	4	4	2
// # dp[b] = B 흔적 합이 b일 때 가능한 A 흔적 합의 최솟값
// [ ∞, ∞, ∞, ∞ ]
//dp = [0, ∞, ∞, ∞]
    // ↑
// B=0일 때 A=0 가능
// [1,2]
// B=0 → A가 훔침 → A=1
// B=2 → B가 훔침 → A=0
//     dp[0] = 1
// dp[2] = 0
// a의 최솟값만 확인 같은 a의 값이 최솟값인것만

// dp = [1, ∞, 0, ∞]

// [2, 3],

// b=0, A=1

// A가 훔침 → A=3 (가능) A=3 dp[0] = 3
    
// B가 훔침 → B=3 (가능) -> 
// B가 훔침
// → A = 1, B = 0 + 3 = 3
// → next[3] = 1
// dp[3] = 1

// b=2, A=0

// A가 훔침 → A=2 (가능) dp[2]=2 

// B가 훔침 → B=5 (불가, m=4 초과)

// dp = [3, ∞, 2, 1]

// [2,1]
// b=0, A=3

// A가 훔침 → A=5 ❌ (n=4 초과)

// B가 훔침 → B=1, A=3

// b=2, A=2

// A가 훔침 → A=4 ❌

// B가 훔침 → B=3, A=2

// b=3, A=1

// A가 훔침 → A=3

// B가 훔침 → B=4 ❌