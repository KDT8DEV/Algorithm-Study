/*
 * 그래프(가중치 있는 무방향 그래프) + 구현
 * 두 정점의 공통 이웃 찾기 또는 인접 정보의 교집합/내적 계산
 */
// 풀이 1
function solution(n, friends) {
  const intimacy = {};
  const friendMap = {};

  for (const [a, b, c] of friends) {
    intimacy[`${a},${b}`] = c;
    intimacy[`${b},${a}`] = c;
    if (!friendMap[a]) friendMap[a] = new Set();
    if (!friendMap[b]) friendMap[b] = new Set();
    friendMap[a].add(b);
    friendMap[b].add(a);
  }
  console.log(intimacy);
  console.log(friendMap);

  const result = [];

  for (let i = 1; i <= n; i++) {
    const a = i;
    const b = (i % n) + 1;

    const aFriends = friendMap[a] ?? new Set();
    const bFriends = friendMap[b] ?? new Set();

    let total = 0;
    for (const c of aFriends) {
      if (bFriends.has(c)) {
        total += intimacy[`${a},${c}`] * intimacy[`${b},${c}`];
      }
    }
    result.push(total);
  }

  return result;
}

// 풀이 2
function solution2(n, friends) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (const [a, b, c] of friends) {
    graph[a][b] = c;
    graph[b][a] = c;
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    const a = i;
    const b = (i % n) + 1;

    let total = 0;

    for (let c = 1; c <= n; c++) {
      if (graph[a][c] > 0 && graph[b][c] > 0) {
        total += graph[a][c] * graph[b][c];
      }
    }
    result.push(total);
  }
  return result;
}

// 풀이 3
function solution3(n, friends) {
  const graph = Array.from({ length: n + 1 }, () => new Map());

  for (const [a, b, c] of friends) {
    graph[a].set(b, c);
    graph[b].set(a, c);
  }

  const answer = [];

  for (let a = 1; a <= n; a++) {
    const b = a === n ? 1 : a + 1;

    const [left, right] = graph[a].size <= graph[b].size ? [graph[a], graph[b]] : [graph[b], graph[a]];

    let total = 0;

    for (const [c, w1] of left) {
      if (!right.has(c)) continue;
      total += w1 * right.get(c);
    }
    answer.push(total);
  }
  return answer;
}
console.log(
  solution3(6, [
    [1, 2, 5],
    [1, 4, 3],
    [2, 3, 1],
    [2, 4, 2],
    [3, 5, 3],
    [4, 5, 7],
  ]),
);
