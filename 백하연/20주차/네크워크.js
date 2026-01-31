/*
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
 * 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 * 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
 */

/** 깊이/너비 우선 탐색(DFS/BFS)
 *
 * @param {*} n 컴퓨터의 개수
 * @param {*} computers 연결에 대한 정보가 담긴 2차원 배열
 * @returns 네트워크의 개수
 */
function solution(n, computers) {
  let network = 0;
  const visited = Array(n).fill(false); // 이미 확인한 컴퓨터인지 확인

  // 컴퓨터 A : [1, 1, 0] -> A와 B가 연결, C와는 연결 X
  // 컴퓨터 B : [1, 1, 0] -> B와 A가 연결, C와는 연결 X
  // 컴퓨터 C : [0, 0, 1] -> C는 A와 연결 X, C는 B와 연결 X, C는 자신과만 연결
  for (let i = 0; i < n; i++) {
    console.log('i', i); // 0

    // 아직 확인하지 않은 컴퓨터라면
    if (!visited[i]) {
      network++;

      let queue = [i]; // [0]
      console.log('queue', queue);

      visited[i] = true;

      while (queue.length > 0) {
        let current = queue.shift(); // 0
        console.log('current', current);

        for (let j = 0; j < n; j++) {
          if (computers[current][j] === 1 && !visited[j]) {
            visited[j] = true;
            queue.push(j);
            console.log('queue.push', queue);
          }
        }
      }
    }
  }

  return network;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // 2
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ]),
// ); // 1
