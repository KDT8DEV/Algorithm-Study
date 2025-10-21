// https:school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2, temp = [], answer = [[]], length = arr1.length) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer[i] = temp;
    temp = [];
  }
  return answer;
}

// 다른사람 풀이
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
