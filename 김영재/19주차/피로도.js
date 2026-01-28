function solution(k, dungeons) {
    let maxCount = 0;
    const visited = Array(dungeons.length).fill(false);

    function dfs(currentFatigue, count) {
        maxCount = Math.max(maxCount, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minReq, cost] = dungeons[i];
            if (!visited[i] && currentFatigue >= minReq) {
                visited[i] = true;
                dfs(currentFatigue - cost, count + 1);
                visited[i] = false; // 백트래킹
            }
        }
    }

    dfs(k, 0);
    return maxCount;
}

console.log(solution(80,[[80,20],[50,40],[30,10]]));
