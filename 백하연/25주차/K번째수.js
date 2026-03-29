/*
 * 정렬 - K번째수
 * 문제: 배열 array의 i번째부터 j번째까지 자르고 정렬했을 때, k번째에 있는 수를 구하기
 */
function solution(array, commands) {
  let answer = [];

  commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j).sort((a, b) => a - b);

    answer.push(sliced[k - 1]);
  });

  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
); // [5, 6, 3]

// 핵심 패턴 : 배열의 일부분을 가공하고, 특정 기준에 따라 정렬한 뒤, 목표하는 값을 추출하는 과정을 반복하는 것