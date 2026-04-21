/*
 * 방문 길이
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 *
 * 문제 설명
 * 캐릭터는 (0, 0)에서 시작하며 U/D/L/R 명령어로 이동한다.
 * 좌표평면 경계는 -5~5이고, 경계를 벗어나는 명령은 무시한다.
 * 캐릭터가 처음 걸어본 길(간선)의 개수를 반환한다.
 * 단, A→B와 B→A는 같은 길로 취급한다.
 *
 * 제한사항
 * - dirs는 'U', 'D', 'R', 'L'만 포함된 문자열이다.
 * - dirs의 길이는 500 이하의 자연수이다.
 *
 * 입출력 예
 * dirs             | return
 * "ULURRDLLU"      | 7
 * "LULLLLLLU"      | 7
 */
function solution(dirs) {
  const commands = dirs.split('');

  const visited = new Set();
  let x = 0;
  let y = 0;

  commands.forEach((command) => {
    let nx = x;
    let ny = y;

    if (x === 5 && command === 'R') return;
    if (x === -5 && command === 'L') return;
    if (y === 5 && command === 'U') return;
    if (y === -5 && command === 'D') return;

    switch (command) {
      case 'U':
        ny = y + 1;
        break;
      case 'D':
        ny = y - 1;
        break;
      case 'R':
        nx = x + 1;
        break;
      case 'L':
        nx = x - 1;
        break;
    }

    if (x < nx || (x === nx && y < ny)) {
      visited.add(`${x},${y},${nx},${ny}`);
    } else {
      visited.add(`${nx},${ny},${x},${y}`);
    }

    x = nx;
    y = ny;
  });

  return visited.size;
}

// 다른 풀이
function solution(dirs) {
  const directions = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const visited = new Set();

  let x = 0;
  let y = 0;

  for (const command of dirs) {
    const [dx, dy] = directions[command];
    const nx = x + dx;
    const ny = y + dy;

    if (Math.abs(nx) > 5 || Math.abs(ny) > 5) continue;

    const path = x < nx || (x === nx && y < ny);

    if (path) {
      visited.add(`${x},${y},${nx},${ny}`);
    } else {
      visited.add(`${nx},${ny},${x},${y}`);
    }

    x = nx;
    y = ny;
  }

  return visited.size;
}
console.log(solution('ULURRDLLU')); // 7
console.log(solution('LULLLLLLU')); // 7
