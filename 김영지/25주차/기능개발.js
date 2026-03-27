/**문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 
각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 
각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 
각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
 */

/**나의 풀이 */
function solution(progresses, speeds) {
  let compDate = [];

  for (let i = 0; i < progresses.length; i++) {
    compDate.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let result = [];
  let day = compDate[0];
  let cnt = 1;

  for (let i = 1; i < compDate.length; i++) {
    if (day >= compDate[i]) {
      cnt++;
    } else {
      result.push(cnt);
      day = compDate[i];
      cnt = 1;
    }
  }
  result.push(cnt);

  return result;
}

//==========================================================//
// let progresses = [93, 30, 55];
// let speeds = [1, 30, 5]; // [2, 1]
// let compDate = [];
// // 남은 진도 100 - n = k
// // [7, 70, 45]

// // 완성 일수 Math.ceil(k / speeds) = comp
// // [7, 3, 9]

// // 배포 갯수 comp >= j 의 j 넣기. arr.push(j)
// // [2, 1]

// for (let i = 0; i < progresses.length; i++) {
//   compDate.push(Math.ceil((100 - progresses[i]) / speeds[i]));
// }

// let result = [];
// let day = compDate[0];
// let cnt = 1;

// for (let i = 1; i < compDate.length; i++) {
//   if (day >= compDate[i]) {
//     cnt++;
//   } else {
//     result.push(cnt);
//     day = compDate[i];
//     cnt = 1;
//   }
// }
// result.push(cnt);

// console.log(result);
