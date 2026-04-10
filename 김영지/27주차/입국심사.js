/**문제 설명
n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 
각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 
가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 
하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 
모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 */

/**나의 풀이 */
function solution(n, times) {
  let maxTimes = Math.max(...times); // 가장 오래 걸리는 심사 시간
  let left = 0; // 최소 시간 (0부터 시작)
  let right = maxTimes * n; // 최악의 경우: 가장 느린 심사관이 n명 모두 처리

  while (left <= right) {
    // 이분탐색 범위가 유효한 동안 반복
    let mid = Math.floor((left + right) / 2); // 중간 시간 후보

    if (canPass(mid, n, times)) {
      // mid 시간 안에 n명 처리 가능하면
      right = mid - 1; // 더 작은 시간에서도 가능한지 탐색 (최솟값 찾기)
    } else {
      // n명 처리 못하면
      left = mid + 1; // 시간을 늘려야 하므로 오른쪽 탐색
    }
  }

  return left; // 처음으로 조건을 만족하는 최소 시간

  function canPass(mid, n, times) {
    let sum = 0; // mid 시간 동안 처리 가능한 총 인원 수

    for (let i = 0; i < times.length; i++) {
      sum += Math.floor(mid / times[i]); // 각 심사관이 처리 가능한 인원
    }

    return sum >= n; // 총 처리 인원이 n명 이상이면 true
  }
}

//=========================================//
// let n = 6;
// let times = [7, 10]; // 28
// let maxTimes = Math.max(...times);
// let left = 0;
// let right = maxTimes * n;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   if (canPass(mid, n, times)) {
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }

// console.log(left);

// function canPass(mid, n, times) {
//   let sum = 0;

//   for (let i = 0; i < times.length; i++) {
//     sum += Math.floor(mid / times[i]);
//   }

//   return sum >= n;
// }
