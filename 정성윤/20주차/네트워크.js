function solution(n, computers) {
    // # 방문 여부
    const visited = Array(n).fill(false);
    let networkCount = 0;

    function dfs(node) {
        visited[node] = true;

        for (let next = 0; next < n; next++) {
            // # 연결 o 방문x
            if (computers[node][next] === 1 && !visited[next]) {
                dfs(next);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            networkCount++;
        }
    }

    return networkCount;
}

// // # 각 노드에서 시작해 BFS로 연결된 모든 노드를 방문 처리하고, 시작 횟수(연결 요소 수)를 센다
// function solution(n, computers) {
//   const visited = Array(n).fill(false);
//   let answer = 0;

//   for (let i = 0; i < n; i++) {
//     if (visited[i]) continue;

//     // BFS 시작 (i가 속한 네트워크 하나 탐색)
//     const queue = [i];
//     visited[i] = true;

//     for (let q = 0; q < queue.length; q++) {
//       const cur = queue[q];

//       for (let next = 0; next < n; next++) {
//         if (computers[cur][next] === 1 && !visited[next]) {
//           visited[next] = true;
//           queue.push(next);
//         }
//       }
//     }

//     answer++; // i에서 BFS 한 번 돌면 네트워크 1개 확정
//   }

//   return answer;
// }
