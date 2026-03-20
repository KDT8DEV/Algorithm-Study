/**문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

/**나의 풀이 */
function solution(answers) {
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) score[0]++;
    if (answers[i] === p2[i % p2.length]) score[1]++;
    if (answers[i] === p3[i % p3.length]) score[2]++;
  }

  let max = Math.max(...score);
  let result = [];

  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

//====================================================//
// let answer = [1, 3, 2, 4, 2]; // [1,2,3]

// let p1 = [1, 2, 3, 4, 5];
// let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
// let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

// let score = [0, 0, 0];

// for (let i = 0; i < answer.length; i++) {
//   if (answer[i] === p1[i % p1.length]) score[0]++;
//   if (answer[i] === p2[i % p2.length]) score[1]++;
//   if (answer[i] === p3[i % p3.length]) score[2]++;
// }
// console.log(score);
// let max = Math.max(...score);
// let result = [];

// for (let i = 0; i < score.length; i++) {
//   if (max === score[i]) {
//     result.push(i + 1);
//   }
// }

// console.log(result);
