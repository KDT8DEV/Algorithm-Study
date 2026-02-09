// 백준
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

//[ [3 3],
// [1 1 1], 1
// [2 2 2], 2
// [0 1 0], 3
// [3 3 3], 4
// [4 4 4], 5
// [5 5 100]] 6

//import fs from 'fs';
//const input = fs.readFileSync(0, 'utf8').trim().split('\n');

solution = (input) => {
  const inputArr = input
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));
  const N = inputArr[0][0];
  const M = inputArr[0][1];
  let result = Array.from({ length: N });

  let arr1 = [];
  let arr2 = [];
  console.log(inputArr);
  for (let i = 1; i <= N; i++) {
    arr1.push(inputArr[i]);
  }
  for (let j = N + 1; j <= N * 2; j++) {
    arr2.push(inputArr[j]);
  }
  for (let k = 0; k < N; k++) {
    let resultM = '';
    for (let m = 0; m < M; m++) {
      resultM += arr1[k][m] + arr2[k][m];
      resultM += ' ';
    }
    result[k] = resultM.trim();
  }
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
  return result;
};
console.log(solution('3 3\n1 1 1\n2 2 2\n0 1 0\n3 3 3\n4 4 4\n5 5 100'));

// 개선 버전

solution = (input) => {
  const inputArr = input
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

  const [N, M] = inputArr[0];
  let result = [];

  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < M; j++) {
      row.push(inputArr[i + 1][j] + inputArr[i + 1 + N][j]);
    }
    result.push(row.join(' '));
  }

  return result.join('\n');
};


