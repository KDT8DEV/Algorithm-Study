/** 달리기 경주
 *
 * 얀에서는 매년 달리기 경주가 열립니다.
 * 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
 * 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다.
 * 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
 *
 * 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
 */
function solution(players, callings) {
  const map = new Map();
  for (let i = 0; i < players.length; i++) {
    map.set(players[i], i);
  }

  // 1. callings를 순회하며 불린 이름을 하나씩 가져온다.
  for (let i = 0; i < callings.length; i++) {
    // 2. map에서 불린 선수의 현재 등수(idx)를 찾는다.
    const playerIdx = map.get(callings[i]);
    console.log(playerIdx);

    // 3. 바로 앞 선수의 등수(idx - 1)와 그 이름을 알아낸다.
    const frontPlayer = players[playerIdx - 1];
    console.log(frontPlayer);

    // 4. players 배열에서 두 선수의 위치를 서로 바꾼다.
    players[playerIdx - 1] = callings[i];
    players[playerIdx] = frontPlayer;
    console.log(players);

    // 5. map에서도 두 선수의 바뀐 등수를 갱신한다. (map.set 이용)
    map.set(callings[i], playerIdx - 1);
    map.set(frontPlayer, playerIdx);
  }

  console.log(map);
  return players;
}

// 개선
function solution(players, callings) {
  const map = new Map();
  players.forEach((player, idx) => map.set(player, idx));

  for (const calling of callings) {
    const playerIdx = map.get(calling);
    const frontPlayer = players[playerIdx - 1];

    players[playerIdx - 1] = calling;
    players[playerIdx] = frontPlayer;

    map.set(calling, playerIdx - 1);
    map.set(frontPlayer, playerIdx);
  }

  console.log(map);

  return players;
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine'])); // ["mumu", "kai", "mine", "soe", "poe"]
