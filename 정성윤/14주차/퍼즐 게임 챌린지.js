//현재 퍼즐의 난이도를 diff, 
//현재 퍼즐의 소요 시간을 time_cur
//이전 퍼즐의 소요 시간을 time_prev
// 당신의 숙련도를 level
//diff ≤ level이면 퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용하여 해결합니다.
//diff > level이면, 퍼즐을 총 diff - level번 틀립니다. 
// 퍼즐을 틀릴 때마다, time_cur만큼의 시간을 사용하며, 
// 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 합니다.
//  이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다.
//  diff - level번 틀린 이후에 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용하여 퍼즐을 해결합니다.

//시간 내로 하려면 숙련도를 구해라
//이진 탐색??
//1. 최솟값 / 최대값
//2. 어떤 “수치”를 정해서 가능한지 불가능한지를 판단
//3. 정답이 연속된 정수 범위 안에 있음
// level이 커지면

// diff > level 인 퍼즐 수 ↓

// diff - level (틀리는 횟수) ↓

// 퍼즐마다 걸리는 시간 ↓ 또는 유지

// 총 시간은 절대 증가하지 않음 >>> 불가능 → 가능으로 단 한 번만 바뀌는 구조

function solution(diffs, times, limit) {
  // # level로 전부 풀 수 있는지(총 시간 <= limit) 판정
  const canClear = (level) => {
    let total = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const timeCur = times[i];
      const timePrev = (i === 0) ? 0 : times[i - 1];

      if (diff <= level) {
        total += timeCur;
      } else {
        const wrong = diff - level;
        total += timeCur + wrong * (timeCur + timePrev);
      }

      // # limit 초과면 더 볼 필요 없이 실패 처리(오버플로/시간 절약)
      if (total > limit) return false;
    }
    return total <= limit;
  };

  // # 이분 탐색 범위: 1 ~ max(diffs)
  let lo = 1;
  let hi = 0;
  for (const d of diffs) 
    hi = Math.max(hi, d);

  // # 최소 level 찾기 (lower_bound)
  //이분탐색
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canClear(mid)) 
        hi = mid;
    else 
        lo = mid + 1;
  }

  return lo;
}
