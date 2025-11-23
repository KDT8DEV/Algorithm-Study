/* 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.*/

// function solution(s1, s2) {
//   let max = 0;
//   let count = 0;
//   if (s1.length > s2.length) {
//     max = s1.length;
//   } else {
//     max = s2.length;
//   }

//   for (let i = 0; i < max; i++) {
//     if (s1[i] === s2[i]) {
//       count++;
//     }
//   }
//   return count;
// }

function solution(s1, s2) {
  let intersection = s1.filter((count) => s2.includes(count));
  return intersection.length;
}
