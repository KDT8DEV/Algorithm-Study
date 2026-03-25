function solution(n, infection, edges, k) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, type] of edges) {
        graph[u].push([v, type]);
        graph[v].push([u, type]);
    }

    let maxInfected = 1; 
    function dfs(infectedSet, actionsLeft) {
        maxInfected = Math.max(maxInfected, infectedSet.size);
        if (actionsLeft === 0) return;

        for (let pipeType of ['A', 'B', 'C']) {
            let newInfected = new Set(infectedSet);

            let stack = [...infectedSet];
            while (stack.length) {
                let node = stack.pop();
                for (let [next, type] of graph[node]) {
                    if (type === pipeType && !newInfected.has(next)) {
                        newInfected.add(next);
                        stack.push(next);
                    }
                }
            }
            dfs(newInfected, actionsLeft - 1);
        }
    }

    dfs(new Set([infection]), k);

    return maxInfected;
}