/**문제 설명
어느 왕국에 하나 이상의 도시들이 있습니다. 왕국의 왕은 새 도시를 짓기로 결정하였습니다. 
해당 도시를 짓기 위해서는 도시를 짓는 장소에 금 a kg과 은 b kg이 전달되어야 합니다.

각 도시에는 번호가 매겨져 있는데, i번 도시에는 금 g[i] kg, 은 s[i] kg, 그리고 트럭 한 대가 있습니다. 
i번 도시의 트럭은 오직 새 도시를 짓는 건설 장소와 i번 도시만을 왕복할 수 있으며, 
편도로 이동하는 데 t[i] 시간이 걸리고, 최대 w[i] kg 광물을 운반할 수 있습니다. 
(광물은 금과 은입니다. 즉, 금과 은을 동시에 운반할 수 있습니다.) 
모든 트럭은 같은 도로를 여러 번 왕복할 수 있으며 연료는 무한대라고 가정합니다.

정수 a, b와 정수 배열 g, s, w, t가 매개변수로 주어집니다. 
주어진 정보를 바탕으로 각 도시의 트럭을 최적으로 운행했을 때, 
새로운 도시를 건설하기 위해 금 a kg과 은 b kg을 전달할 수 있는 가장 빠른 시간을 구해 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// 이분탐색
function solution(a, b, g, s, w, t) {
  // 구하는 값이 가장 빠른 시간
  // 시간의 범위를 두고 쪼개가면서 가능/불가능 판단하자
  let left = 0;
  let right = 1e15; // 1 × 10¹⁵ 최대한 큰 값
  let answer = right; // 시간

  while (left <= right) {
    // 시간의 범위를 반으로 쪼개기
    let mid = Math.floor((left + right) / 2);

    // mid 시간 안에 가능한지 체크
    if (canCarry(mid, a, b, g, s, w, t)) {
      answer = mid; // 가능했으니 answer에 대입
      right = mid - 1; // 가장 빠른 시간 구해야 하니 범위를 줄여보자
    } else {
      left = mid + 1; // 불가능이면 범위 늘리기
    }
  }

  return answer;

  // mid 시간 안에 운반이 가능하냐 함수
  function canCarry(mid, a, b, g, s, w, t) {
    let gold = 0;
    let silver = 0;
    let total = 0;

    // 트럭 별 체크
    for (let i = 0; i < g.length; i++) {
      // 이동 횟수 계산
      let move = Math.floor(mid / (2 * t[i])); // mid 시간에 왕복횟수
      if (mid % (2 * t[i]) >= t[i]) move++; // 왕복하고 남은 시간이 트럭 운전 가능 시간보다 크면 이동 횟수 증가

      let maxCarry = move * w[i]; // 시간 안에 트럭이 이동하면서 옮길 수 있는 양
      // i도시에 있는 금, 은의 양을 넘을 수 없으므로 최소값 처리
      gold += Math.min(g[i], maxCarry); // 트럭들이 옮길 수 있는 금의 양
      silver += Math.min(s[i], maxCarry); // 트럭들이 옮길 수 있는 은의 양
      total += Math.min(g[i] + s[i], maxCarry); // 트럭들이 옮길 수 있는 금, 은의 양
    }

    // 조건 체크 : 주어진 a, b 값보다 트럭들이 옮길 수 있는 양이 커야 시간 안에 운반 가능
    return gold >= a && silver >= b && total >= a + b;
  }
}

//=========================================================//
// let a = 90; // 새 도시 금
// let b = 500; // 새 도시 은
// let g = [70, 70, 0]; // 도시들 금 보유
// let s = [0, 0, 500]; // 도시들 은 보유
// let w = [100, 100, 2]; // 트럭 최대 운반 무게
// let t = [4, 8, 1]; // 499

// let left = 0;
// let right = 1e15;
// let answer = right;     // 시간

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);

//   // mid 시간 안에 가능한지 체크
//   if (canCarry(mid, a, b, g, s, w, t)) {
//     answer = mid;
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }

// console.log(answer);

// function canCarry(mid, a, b, g, s, w, t) {
//   let gold = 0;
//   let silver = 0;
//   let total = 0;

//   for (let i = 0; i < g.length; i++) {
//     // 이동 횟수 계산
//     let move = Math.floor(mid / (2 * t[i]));
//     if (mid % (2 * t[i]) >= t[i]) move++;

//     let maxCarry = move * w[i];
//     gold += Math.min(g[i], maxCarry);
//     silver += Math.min(s[i], maxCarry);
//     total += Math.min(g[i] + s[i], maxCarry);
//   }

//   // 조건 체크
//   return gold >= a && silver >= b && total >= a + b;
// }
