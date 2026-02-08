// queue에는 컴퓨터 번호(정수) 가 들어가야 함
// visited에는 번호만 저장
// cnt는 새 BFS 시작할 때만 +1
// computers는 2차원 배열 → for문으로 탐색
function solution(n, computers) {
  const visited = new Set();
  let cnt = 0;

  // 모든 컴퓨터를 한 번씩 시작점으로 확인
  for (let i = 0; i < n; i++) {
    // 이미 방문한 컴퓨터면 스킵
    if (visited.has(i)) continue;

    // 새로운 네트워크 발견
    cnt++;

    // BFS 시작
    const queue = [i];
    visited.add(i); // visited = { 1 } // visited = { 1, 1 } // visited = { 1, 1, 0 }

    while (queue.length) {
      const node = queue.shift();

      // node와 연결된 모든 컴퓨터 확인
      for (let j = 0; j < n; j++) {
        if (computers[node][j] === 1 && !visited.has(j)) {
          visited.add(j);
          queue.push(j);
        }
      }
    }
  }

  return cnt;
}

// BFS 너비우선탐색을 사용하여 풀어보았습니다.
// 근데 이제 실패한
function solution(n, computers) {
  const visited = new Set();
  const queue = computers[0][0];
  let cnt = 0;
  for (let i = 0; i < computers.length; i++) {
    visited.add(i);

    for (let j = 0; j < n; j++) {
      const node = queue.shift();

      if (visited.has(computers[i][j])) {
        visited.add(node[j]);
        cnt++;
        node.push(node[j]);
      }
    }
  }
  return cnt;
}

// 참고한 코드

// function bfs(graph, start) {
//   // 방문한 노드를 저장하기 위한 Set
//   // 이미 방문한 노드를 다시 방문하지 않기 위함
//   const visited = new Set();

//   // BFS는 큐(FIFO)를 사용
//   // 시작 노드를 큐에 넣고 탐색 시작
//   const queue = [start];

//   // 시작 노드는 바로 방문 처리
//   visited.add(start);

//   // 큐에 탐색할 노드가 남아있는 동안 반복
//   while (queue.length) {
//     // 큐에서 가장 먼저 들어온 노드를 꺼냄
//     // BFS는 가까운 노드부터 탐색
//     const node = queue.shift();

//     // 현재 방문한 노드 처리
//     // (문제에 따라 출력, 카운트, 거리 계산 등으로 바뀔 수 있음)
//     console.log(node);

//     // 현재 노드와 직접 연결된 모든 노드를 순회
//     for (const next of graph[node]) {
//       // 아직 방문하지 않은 노드라면
//       if (!visited.has(next)) {
//         // 방문 처리
//         visited.add(next);

//         // 다음 탐색 대상으로 큐에 추가
//         queue.push(next);
//       }
//     }
//   }
// }
