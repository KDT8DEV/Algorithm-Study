// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// lv.01

// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 성공
// function solution(numbers) {
//   let answer = new Set();
//   numbers.forEach((ele, idx) => {
//     for (let i = idx; i < numbers.length - 1; i++) {
//       answer.add(ele + numbers[i + 1]);
//     }
//   });
//   return Array.from(answer).sort((a, b) => a - b);
// }

// 코드 리팩
function solution(numbers, answer = []) {
  numbers.forEach((ele, idx) => {
    for (let i = idx; i < numbers.length - 1; i++) {
      answer.push(ele + numbers[i + 1]);
    }
  });
  return [...new Set(answer)].sort((a, b) => a - b);
}
