/** 문제 설명
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 */
function solution(s1, s2) {
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) count++;
  }
  return count;
}

// 다른 사람의 풀이 : filter, includes 활용
function solution(s1, s2) {
  return s1.filter((value) => s2.includes(value)).length;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));
