//https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 실패!!!!
// function solution(string, answer = [], str_index = {}) {
//   string.split('').forEach((e, i) => {
//     if (str_index[e]) {
//       let idx = str_index[e];
//       answer.push(i - idx);
//       str_index[e] = i;
//       console.log(str_index);
//     } else {
//       str_index[e] = i;
//       console.log(str_index);
//       answer.push(-1);
//     }
//   });
//   return answer;
// }

// 이유는 6열 str_index[e]가 0인 경우에는 falsy하게 처리되기 때문에
// 정확히 undefined가 아닌경우로 정정해야함

function solution(string, answer = [], str_index = {}) {
  string.split('').forEach((e, i) => {
    if (str_index[e] !== undefined) {
      let idx = str_index[e];
      answer.push(i - idx);
      str_index[e] = i;
    } else {
      str_index[e] = i;
      answer.push(-1);
    }
  });
  return answer;
}
