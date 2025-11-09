/* 문제 설명
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
 * 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */
// 2차 배열 순회 = 행을 순회 -> 각 행 내의 열을 순회
function solution(arr1, arr2) {
  const answer = []
  // 각 행(row)을 순회
  for (let i = 0; i < arr1.length; i++) {
    const row = [] // 각 행마다 새로운 배열 생성
    // 각 행의 열(column)을 순회
    for (let j = 0; j < arr1[i].length; j++) {
      // 같은 위치의 값 더하기
      row.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(row)
  }
  return answer
}
solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
) // [[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]) // [[4],[6]]

/* 다른 사람의 풀이
 * map을 두 번 사용하니 코드가 간결해지는구나...!
 */
function other_solution(arr1, arr2) {
  console.log(arr1.map((row, y) => row.map((v, x) => v + arr2[y][x])))

  return arr1.map((row, y) => row.map((v, x) => v + arr2[y][x]))
}
other_solution(
  [
    [1, 2], // 0행
    [2, 3], // 1행
  ], // 0열, 1열
  [
    [3, 4],
    [5, 6],
  ]
) // [[4,6],[7,9]]
other_solution([[1], [2]], [[3], [4]]) // [[4],[6]]
