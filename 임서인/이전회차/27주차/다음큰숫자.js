function solution(n) {
  const oneCount = n.toString(2).split('1').length - 1;

  let next = n + 1;
  while (next.toString(2).split('1').length - 1 !== oneCount) {
    next++;
  }

  return next;
}

// 풀이
// n의 2진수에서 1의 개수를 구하고
// n+1부터 1씩 증가시키면서 1의 개수가 같은 첫 번째 수를 반환

// // 테스트
// console.log(solution(78)); // 83
// console.log(solution(15)); // 23
