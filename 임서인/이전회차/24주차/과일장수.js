function solution(k, m, score) {
  let arr = score.sort((a, b) => b - a);
  let realLength = Math.floor(score.length / m);
  let result = 0;
  for (let i = 0; i < realLength * m; i += m) {
    result += arr[i + m - 1] * m;
  }
  return result;
}

// 내림차순 후
// m의 배수만큼만 돌린 후
// m씩 커지게 해서
// [3,3,2][2,2,1]일때
// 맨 끝 자리의 값만 *m 하기