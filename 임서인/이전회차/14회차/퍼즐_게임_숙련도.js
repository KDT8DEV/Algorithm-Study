function solution(diffs, times, limit) {
  const n = diffs.length;

  // limit이 매우 클 수 있으므로 BigInt로 변환
  limit = BigInt(limit);

  /**
   * 주어진 숙련도 level로
   * 모든 퍼즐을 제한 시간 안에 풀 수 있는지 판별하는 함수
   */
  function canSolve(level) {
    let total = 0n; // 누적 시간 (BigInt)

    // 퍼즐을 순서대로 진행
    for (let i = 0; i < n; i++) {
      // 현재 퍼즐의 난이도가 숙련도 이하인 경우
      // → 한 번에 성공, 현재 퍼즐 시간만 소요
      if (diffs[i] <= level) {
        total += BigInt(times[i]);
      }
      // 현재 퍼즐의 난이도가 숙련도보다 높은 경우
      else {
        // 틀리는 횟수
        const mistakes = diffs[i] - level;

        // 틀릴 때마다:
        //  - 현재 퍼즐 다시 시도 (times[i])
        //  - 이전 퍼즐 다시 풀기 (times[i - 1])
        // 마지막에 성공 1번 (times[i])
        total +=
          BigInt(mistakes) * BigInt(times[i] + times[i - 1]) + BigInt(times[i]);
      }

      // 이미 제한 시간을 초과했다면 더 볼 필요 없음
      if (total > limit) return false;
    }

    // 모든 퍼즐을 제한 시간 내에 해결 가능
    return true;
  }

  // 이분 탐색 범위
  let left = 1; // 숙련도 최소값
  let right = Math.max(...diffs); // 이 이상이면 틀리지 않음
  let answer = right;

  // 숙련도의 최솟값을 찾기 위한 이분 탐색
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // mid 숙련도로 해결 가능하다면
    if (canSolve(mid)) {
      answer = mid; // 정답 후보로 저장
      right = mid - 1; // 더 작은 숙련도에서 가능한지 탐색
    }
    // 해결 불가능하다면 숙련도를 높여야 함
    else {
      left = mid + 1;
    }
  }

  return answer;
}
