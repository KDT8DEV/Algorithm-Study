/*
 * [문제 설명]
 * 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서,
 * 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
 * 예를 들어, s="banana"라고 할 때, 각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
 * - b는 처음 나왔기 때문에 -1
 * - a는 처음 나왔기 때문에 -1
 * - n은 처음 나왔기 때문에 -1
 * - a는 자신보다 두 칸 앞에 a가 있습니다. 2
 * - n도 자신보다 두 칸 앞에 n이 있습니다. 2
 * - a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 2
 * 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.
 *
 * [제한사항]
 * 1 ≤ s의 길이 ≤ 10,000
 * s은 영어 소문자로만 이루어져 있습니다.
 */
function solution(s) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      result.push(i - map.get(char));
    } else {
      result.push(-1);
    }
    map.set(char, i);
  }
  return result;
}

// 다른 사람의 풀이
function solution(s) {
  [...s].map((char, index) => {
    const count = s.slice(0, index).lastIndexOf(char);
    return count < 0 ? count : index - count;
  });
}

console.log(solution('banana')); // [-1, -1, -1, 2, 2, 2]
console.log(solution('foobar')); // [-1, -1, 1, -1, -1, -1]
