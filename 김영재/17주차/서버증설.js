function solution(players, m, k) {
  const T = players.length; // 0시 ~ 23시 → 24개
  let answer = 0;

  // delta[t] = 해당 시점에 서버 증감량
  const delta = new Array(T + k ).fill(0);
  let active = 0;

  for (let t = 0; t < T; t++) {
    // 현재 시점에 만료된 서버 반영
    active += delta[t];

    // 필요한 서버 수
    const required = Math.floor(players[t] / m);

    if (active < required) { 
        //필요한 서버가 실행중인 서버보다 많으면 필요 서버를 계산
      const need = required - active;
      answer += need;//증설

      // 지금부터 need만큼 서버 추가
      active += need;

      // k시간 뒤에 서버 만료
      delta[t + k] -= need;
    }
  }

  return answer;
}