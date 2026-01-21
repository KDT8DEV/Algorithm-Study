/**
 * 동적 계획법(Dynamic Programming, DP)
 * 문제 핵심 : 각 물건마다 A가 훔칠지, B가 훔칠지 결정하는 것인데, 물건의 개수가 많아질수록 가능한 모든 경우의 수를 따지기에는 시간이 너무 많이 걸리기 때문
 * @param {number[]} info 각 물건을 훔칠 때 생기는 흔적에 대한 정보
 * @param {number} n A도둑이 경찰에 붙잡히는 최소 흔적 개수
 * @param {number} m B도둑이 경찰에 붙잡히는 최소 흔적 개수
 * @returns 두 도둑 모두 경찰에 붙잡히지 않도록 모든 물건을 훔쳤을 때, A도둑이 남긴 흔적의 누적 개수의 최솟값, 만약 어떠한 방법으로도 두 도둑 모두 경찰에 붙잡히지 않게 할 수 없다면 -1을 return
 */
function solution(info, n, m) {
  let dp = Array(m).fill(Infinity);
  dp[0] = 0;

  for (const [a, b] of info) {
    const next_dp = Array(m).fill(Infinity);

    for (let i = 0; i < m; i++) {

      if (dp[i] === Infinity) continue;

      next_dp[i] = Math.min(next_dp[i], dp[i] + a);

      if (i + b < m) {
        next_dp[i + b] = Math.min(next_dp[i + b], dp[i]);
      }
    }
    console.log('next_dp', next_dp);
    dp = next_dp;
  }

  const ATraces = dp.filter((value) => value < n);

  console.log(ATraces, Math.min(...ATraces));

  if (ATraces.length > 0) {
    return Math.min(...ATraces);
  } else {
    return -1;
  }
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4,
  ),
); // 2

// 다른 사람의 풀이
function other(info, n, m) {
  const len = info.length;
  const memo = new Map();

  function dfs(idx, aTrace, bTrace) {
    // 경찰에 잡히는 경우 - 종료
    if (aTrace >= n || bTrace >= m) return Infinity;
    // 모든 물건을 다 훔친 경우, A 흔적 반환
    if (idx === len) return aTrace;

    const key = `${idx}-${aTrace}-${bTrace}`;
    if (memo.has(key)) return memo.get(key);

    // 1. 현재 물건을 A 도둑이 훔치는 경우
    let choiceA = dfs(idx + 1, aTrace + info[idx][0], bTrace);
    // 2. 현재 물건을 B 도둑이 훔치는 경우
    let choiceB = dfs(idx + 1, aTrace, bTrace + info[idx][1]);

    // 최소 A 흔적을 메모이제이션
    let result = Math.min(choiceA, choiceB);
    memo.set(key, result);

    return result;
  }

  const answer = dfs(0, 0, 0);
  return answer === Infinity ? -1 : answer;
}

console.log(
  other(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4,
  ),
);
