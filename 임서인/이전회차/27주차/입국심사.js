// 문제: 입국심사
// n명이 심사를 받는 데 걸리는 최소 시간을 구해라
//
// ────────────────────────────────────────────
// 이진 탐색 적용 이유:
// → "최솟값을 구해라" (최소 시간)
// → 거꾸로: "T 분이 주어지면 n명을 다 처리할 수 있어?"
//   → 각 심사관 i는 T분 동안 floor(T / times[i])명 처리 가능
//   → sum(floor(T / times[i])) >= n 이면 가능!
// → T가 클수록 항상 가능 (단조성 ✓) → 이진 탐색!

function solution(n, times) {
  let minTime = 1;
  let maxTime = Math.min(...times) * n; // 가장 빠른 심사관이 n명 전부 처리하는 시간

  while (minTime < maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);

    // midTime 분 동안 처리 가능한 총 인원
    const processedCount = times.reduce(
      (sum, t) => sum + Math.floor(midTime / t),
      0,
    );

    if (processedCount >= n) {
      maxTime = midTime; // 가능하면 더 줄여보기
    } else {
      minTime = midTime + 1; // 불가능하면 더 늘려야 함
    }
  }

  return minTime;
}

// T분 동안 심사관 i가 처리할 수 있는 인원 = floor(T / times[i])
// → 전체 합계가 n 이상이면 가능!
// 금과은 문제랑 구조가 똑같음 "T를 고정하고 가능 여부 체크

// 테스트
// console.log(solution(6, [7, 10])); // 28

// www.google.com을 주소창에 입력하면 어떻게 될까요?


