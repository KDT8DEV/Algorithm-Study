/* 문제 설명
 * 어느 왕국에 하나 이상의 도시들이 있습니다. 왕국의 왕은 새 도시를 짓기로 결정하였습니다. 해당 도시를 짓기 위해서는 도시를 짓는 장소에 금 a kg과 은 b kg이 전달되어야 합니다.
 *
 * 각 도시에는 번호가 매겨져 있는데, i번 도시에는 금 g[i] kg, 은 s[i] kg, 그리고 트럭 한 대가 있습니다. i번 도시의 트럭은 오직 새 도시를 짓는 건설 장소와 i번 도시만을 왕복할 수 있으며, 편도로 이동하는 데 t[i] 시간이 걸리고, 최대 w[i] kg 광물을 운반할 수 있습니다. (광물은 금과 은입니다. 즉, 금과 은을 동시에 운반할 수 있습니다.) 모든 트럭은 같은 도로를 여러 번 왕복할 수 있으며 연료는 무한대라고 가정합니다.
 *
 * 정수 a, b와 정수 배열 g, s, w, t가 매개변수로 주어집니다. 주어진 정보를 바탕으로 각 도시의 트럭을 최적으로 운행했을 때, 새로운 도시를 건설하기 위해 금 a kg과 은 b kg을 전달할 수 있는 가장 빠른 시간을 구해 return 하도록 solution 함수를 완성해주세요.
 */

/**
 * 금과 은 운반하기
 * 주어진 시간 내에 필요한 금과 은을 모두 운반할 수 있는 최소 시간을 반환
 * 이분 탐색 → 매개 변수 탐색(특정 조건을 만족하는 최솟값 구하기)
 *
 * @param {*} a 금
 * @param {*} b 은
 * @param {*} g 금의 양이 담긴 배열
 * @param {*} s 은의 양이 담긴 배열
 * @param {*} w 트럭의 최대 운반량이 담긴 배열
 * @param {*} t 트럭의 왕복 시간(편도 이동 시간 * 2)이 담긴 배열
 * @returns {*} 금과 은을 전달할 수 있는 가장 빠른 시간
 */
function solution(a, b, g, s, w, t) {
  let answer = 0;
  let low = 0;
  let high = 4 * 10 ** 14;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let totalGold = 0;
    let totalSilver = 0;
    let totalMix = 0;

    // 시간(mid) 내에 최대 운반량 계산
    for (let i = 0; i < g.length; i++) {
      let count = Math.floor((mid + t[i]) / (t[i] * 2));
      let maxWeight = count * w[i]; // 트럭이 옮길 수 있는 한계치

      totalGold += Math.min(g[i], maxWeight);
      totalSilver += Math.min(s[i], maxWeight);
      totalMix += Math.min(g[i] + s[i], maxWeight);
    }

    if (totalGold >= a && totalSilver >= b && totalMix >= a + b) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}
console.log(solution(10, 10, [100], [100], [7], [10])); // 50
console.log(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1])); // 499
