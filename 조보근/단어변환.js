/* 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요. */

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  function oneDiff(word1, word2) {
    let diffCount = 0;
    for (let j = 0; j < word1.length; j++) {
      if (word1[j] !== word2[j]) diffCount++;
    }
    return diffCount === 1;
  }

  let answer = Infinity;

  let visited = [];
  for (let i = 0; i < words.length; i++) {
    visited.push(false);
  }

  function dfs(now, count) {
    if (now === target) {
      if (count < answer) {
        answer = count;
      }
      return;
    }

    if (count >= answer) return;

    for (let i = 0; i < words.length; i++) {
      if (visited[i] === false && oneDiff(now, words[i])) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(begin, 0);
  if (answer === Infinity) {
    return 0;
  }
  return answer;
}
