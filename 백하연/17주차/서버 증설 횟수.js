/** 문제 설명
 * 시뮬레이션(Simulation) 문제
 * @param players 0시에서 23시까지의 시간대별 게임 이용자의 수를 나타내는 1차원 정수 배열
 * @param m 서버 한 대로 감당할 수 있는 최대 이용자의 수를 나타내는 정수
 * @param k 서버 한 대가 운영 가능한 시간을 나타내는 정수
 * @returns 모든 게임 이용자를 감당하기 위한 최소 서버 증설 횟수
 */
function solution(players, m, k) {
  let server = 0; // 모든 게임 이용자를 감당하기 위한 최소 서버 증설 횟수
  const logList = Array.from({ length: 24 }, () => 0); // 각 시간대별 증설된 서버 수를 기록

  for (let hour = 0; hour < players.length; hour++) {
    const needed = Math.floor(players[hour] / m); // 현재 필요한 최소 서버 수

    // 현재 시간대에 운영 중인 서버 수 계산
    // hour = 10, k = 5일 때 Math.max(0, 10 - 5 + 1) => 6이니까 .slice(6, 10) => 배열의 6,7,8,9에 해당하는 값만 가져와서 reduce로 합산
    const current = logList
      .slice(Math.max(0, hour - k + 1), hour) // slice를 사용해 현재 시각(hour)부터 k시간 이내에 설치된 기록만 추출
      .reduce((prev, cur) => prev + cur, 0); // 현재 시간대에 운영 중인 서버 수

    if (needed > current) {
      logList[hour] += needed - current;
      server += needed - current;
    }
  }

  return server;
}

console.log(
  solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3, 5)
); // 7
console.log(
  solution([0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0], 5, 1)
); // 11
console.log(
  solution([0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], 1, 1)
); // 12
