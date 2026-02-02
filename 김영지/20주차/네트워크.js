/**문제 설명
네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 
예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 
컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 
컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 
따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 
네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
*/

/** 제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
 */

/**나의풀이 */
// dfs 공식
// 1. visited 만든다
// 2. dfs(v)의 역할을 문장으로 정의한다
// 3. dfs 안에서
//    - visited[v] = true
//    - 갈 수 있는 곳으로 dfs
// 4. 바깥 for문에서
//    - 방문 안 한 노드 → dfs 시작
function solution(n, computers) {
    // 각 컴퓨터(노드)를 방문했는지 기록하는 배열
    // 처음엔 전부 방문 안 했으니까 false
    let visited = Array(n).fill(false);

    // 네트워크(연결된 덩어리) 개수
    let network = 0;

    // dfs 함수: num번 컴퓨터에서 시작해서
    // 연결된 모든 컴퓨터를 방문 처리하는 역할
    function dfs(num) {
        // 현재 컴퓨터 방문 처리
        visited[num] = true;

        // num번 컴퓨터와 연결된 다른 컴퓨터들을 전부 확인
        for (let i = 0; i < n; i++) {
            // num과 i가 연결되어 있고
            // 아직 i를 방문하지 않았다면
            if (computers[num][i] === 1 && !visited[i]) {
                // i번 컴퓨터로 이동 (깊이 우선 탐색)
                dfs(i);
            }
        }
    }

    // 모든 컴퓨터를 하나씩 시작점으로 검사
    for (let i = 0; i < n; i++) {
        // 아직 방문하지 않은 컴퓨터라면
        // → 새로운 네트워크의 시작점
        if (!visited[i]) {
            // 이 컴퓨터가 속한 네트워크를 전부 탐색
            dfs(i);

            // 네트워크 하나 발견했으므로 +1
            network++;
        }
    }

    // 전체 네트워크 개수 반환
    return network;
}

//===========================================//
// let n = 3;	
// let computers = [
//                     [1, 1, 0], 
//                     [1, 1, 0], 
//                     [0, 0, 1]
//                 ];  //	2
// // let n = 3;	
// // let computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];  //	1
// let visited = Array(n).fill(false);
// console.log(visited);

// let network = 0;

// function dfs(num){
//     visited[num] = true;

//     for(let i = 0; i <n; i++){
//         if(computers[num][i] ===1 && !visited[i]){
//             dfs(i);
//         }
//     }
// }

// for(let i = 0; i <n; i++){
//     if(!visited[i]){
//         dfs(i);
//         network++;
//     }
// }
// console.log(network);