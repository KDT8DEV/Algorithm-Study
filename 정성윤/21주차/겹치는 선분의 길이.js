
// # 각 선분을 단위 구간으로 쪼개 카운트한 뒤, 2개 이상 겹친 단위 구간 개수를 길이로 반환
function solution(lines) {
  const count = new Map();

  for (const [s0, e0] of lines) {
    let s = s0, e = e0;
    if (s > e) [s, e] = [e, s];

    // [s, e]를 [i, i+1) 단위로 분해: i = s ~ e-1
    for (let i = s; i < e; i++) {
      count.set(i, (count.get(i) || 0) + 1);
    }
  }

  let ans = 0;
  for (const v of count.values()) {
    if (v >= 2) ans++;
  }
  return ans;
}
