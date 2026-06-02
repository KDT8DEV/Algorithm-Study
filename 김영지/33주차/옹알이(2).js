function solution(babbling) {
  let wongal = ["aya", "ye", "woo", "ma"];
  let visited = Array(wongal.length).fill(false);
  let set = new Set();
  let cnt = 0;

  function dfs(w) {
    if (w !== "") {
      set.add(w);
    }
    for (let i = 0; i < wongal.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(w + wongal[i]);
      visited[i] = false;
    }
  }

  dfs("");

  for (let b of babbling) {
    if (set.has(b)) cnt++;
  }

  return cnt;
}

console.log(solution(["aya", "yee", "u", "maa"]));
