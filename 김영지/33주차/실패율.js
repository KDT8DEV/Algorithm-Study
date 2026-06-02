function solution(N, stages) {
  let perMap = [];
  let answer = [];
  for (let i = 1; i < N + 1; i++) {
    const stgSum = stages.filter((s) => s >= i).length;
    const stgFail = stages.filter((s) => s == i).length;
    const percent = stgFail / stgSum;
    perMap.push({
      stage: i,
      percent: percent,
    });
  }
  perMap.sort((a, b) => {
    if (a.percent < b.percent) return 1;
    if (a.percent > b.percent) return -1;
    if (a.percent == b.percent) return a.stage - b.stage;
  });

  perMap.forEach((p) => answer.push(p.stage));

  return answer;
}
