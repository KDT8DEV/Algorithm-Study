const graph = {
  A: ['C', 'B'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift(); // 큐의 맨 앞에서 꺼냄

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      queue.push(...graph[node]); // 인접 노드 큐에 추가
    }
  }
}

console.log(bfs('A'));
