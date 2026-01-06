/**
 * 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return 하는 solution 함수를 완성하세요.
 */
function solution(t, p) {
  let count = 0;
  const list = [];
  for (let i = 0; i < t.length; i++) {
    list.push(t.slice(i, i + p.length));
  }

  list.forEach((num) => num.length === p.length && Number(num) <= Number(p) && count++);

  return count;
}

// 다른 사람의 풀이
function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (t.substr(i, p.length) <= p) answer++;
  }
  return answer;
}

console.log(solution('3141592', '271')); // 2
// console.log(solution('500220839878', '7')); // 8
// console.log(solution('10203', '15')); // 3
