
// m이 
// k 증설시간 
function solution(players, m, k) {
  // # expire[t] = t시간대 시작 시점에 꺼지는 서버 수
  const expire = Array(players.length + k + 1).fill(0);

  let active = 0;  // # 현재 운영 중인 증설 서버 수
  let answer = 0;  // # 총 증설 횟수

  for (let time = 0; time < players.length; time++) {
    // # 이 시간대 시작에 만료되는 서버 반납
    active -= expire[time];

    // # 이 시간대에 필요한 증설 서버 수
    const need = Math.floor(players[time] / m);

    // # 부족한 만큼만 새로 증설
    const add = Math.max(0, need - active);

    answer += add;
    active += add;

    // # k시간 뒤에 반납되도록 예약
    expire[time + k] += add;
  }

  return answer;
}
