/**문제 설명
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
 */

// 행렬 곱셈 하는 법
// 행 하나랑 열 하나를 곱해서 한 칸을 만든다
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    // arr1의 행 개수
    result[i] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      // arr2의 열 개수
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        // arr1의 열 개수
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i].push(sum);
    }
  }
  return result;
}

let arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
let arr2 = [
  [3, 3],
  [3, 3],
]; // [[15, 15], [15, 15], [15, 15]]

console.log(solution(arr1, arr2));
