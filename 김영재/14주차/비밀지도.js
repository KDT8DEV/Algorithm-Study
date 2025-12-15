function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    // 두 배열의 값을 OR 연산
    let row = (arr1[i] | arr2[i]).toString(2);

    // 길이가 n이 되도록 앞에 0을 채움
    row = row.padStart(n, '0');

    // 1 → '#', 0 → ' ' 변환
    row = row.replace(/1/g, '#').replace(/0/g, ' ');

    answer.push(row);
  }

  return answer;
}