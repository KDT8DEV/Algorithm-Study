/**문제 설명
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

/**나의 풀이 */
// 사전순 정렬
// DFS(백트래킹)
function solution(tickets) {
  tickets.sort((a, b) => {
    if (a[0] === b[0]) return a[1].localeCompare(b[1]);
    return a[0].localeCompare(b[0]);
  });

  // 티켓 사용 여부
  let visited = Array(tickets.length).fill(false);
  let result = [];

  function dfs(airport, path, usedCnt) {
    // 종료 조건
    if (usedCnt === tickets.length) {
      result = [...path, airport];
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      // 사용한 티켓이거나, 현재공항이 출발지가 아닐 때 건너뛰기
      if (visited[i]) continue;
      if (airport !== tickets[i][0]) continue;

      visited[i] = true;

      if (dfs(tickets[i][1], [...path, airport], usedCnt + 1)) {
        return true;
      }

      visited[i] = false;
    }

    return false;
  }

  dfs("ICN", [], 0);

  return result;
}

//===========================================================//
// let tickets = [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ]; // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// // ICN => SFO => ATL => ICN => ATL => SFO
// // ICN => ATL => ICN => SFO => ATL => SFO
// //            => SFO => ATL => ICN => SFO

// tickets.sort((a, b) => {
//   if (a[0] === b[0]) return a[1].localeCompare(b[1]);
//   return a[0].localeCompare(b[0]);
// });

// // 티켓 사용 여부
// let visited = Array(tickets.length).fill(false);
// let result = [];

// function dfs(airport, path, usedCnt) {
//   // 종료 조건
//   if (usedCnt === tickets.length) {
//     result = [...path, airport];
//     return true;
//   }

//   for (let i = 0; i < tickets.length; i++) {
//     // 사용한 티켓이거나, 현재공항이 출발지가 아닐 때 건너뛰기
//     if (visited[i]) continue;
//     if (airport !== tickets[i][0]) continue;

//     visited[i] = true;

//     if (dfs(tickets[i][1], [...path, airport], usedCnt + 1)) {
//       return true;
//     }

//     visited[i] = false;
//   }

//   return false;
// }

// dfs("ICN", [], 0);

// console.log(result);
