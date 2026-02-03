function solution(n, computers) {
    const visited = new Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        for (let next = 0; next < n; next++) {
            if (computers[node][next] === 1 && !visited[next]) {
                dfs(next);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    return count;
}

// 실행 예시
console.log(solution(3, [
    [1,1,0],
    [1,1,0],
    [0,0,1]
])); // 출력: 2

// function solution(n, computers) {
//     const visited = new Array(n).fill(false);

//     function bfs(start) {
//         const queue = [start];
//         visited[start] = true;

//         while (queue.length > 0) {
//             const node = queue.shift();
//             for (let next = 0; next < n; next++) {
//                 if (computers[node][next] === 1 && !visited[next]) {
//                     visited[next] = true;
//                     queue.push(next);
//                 }
//             }
//         }
//     }

//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             bfs(i);
//             count++;
//         }
//     }
//     return count;
// }

// // 실행 예시
// console.log(solution(3, [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]
// ])); // 출력: 2