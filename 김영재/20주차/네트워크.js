// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 
// 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 
// 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

function solution(n, computers) {
    const visited = Array(n).fill(false);
    let count = 0;

    //n번째 컴퓨터랑 연결된 컴퓨터 찾아가기
    function dfs(node) {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    //n번쨰 컴퓨터랑 어떤 컴퓨터가 연결되었는지 도는 반복문
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    //0이랑 연결된 컴퓨터는 모두 visited에 기록됨
    //때문에 다음 컴퓨터가 visited에 연결됐다면? 
    // 0컴이랑 연결된 것. => 증가안함
    return count;
}

console.log(solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]]
));

3
[
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1]]	