/* 문제 설명
 *
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 *
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다.
 * 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 *
 * 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 *
 * 제한사항
 * 각 단어는 알파벳 소문자로만 이루어져 있습니다.
 * 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
 * words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
 * begin과 target은 같지 않습니다.
 * 변환할 수 없는 경우에는 0를 return 합니다.
 *
 */
/**
 * 깊이/너비 우선 탐색(DFS/BFS)
 *
 * @param {string} begin
 * @param {string} target
 * @param {string[]} words
 * @returns 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지
 */
function solution(begin, target, words) {
  // 각 단어를 노드로 보고, 연결된 단어들끼리 간선으로 연결된 그래프로 표현
  // 시작 노드(begin)에서 목표 노드(target)까지의 최단 경로를 찾는 문제

  // words 배열 안에 target이 없으면 변환 자체가 불가능하므로 바로 0을 리턴
  if (!words.includes(target)) return 0;

  //  현재 단어와 지금까지 거친 단계 수를 함께 저장
  let queue = [[begin, 0]]; // [[현재 단어, 단계 수]]
  const visited = new Set(); // 방문한 단어 체크

  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();

    // 목표 단어에 도달하면 단계 변환
    if (currentWord === target) return step;

    for (const word of words) {
      // 한 글자만 다르고 아직 방문하지 않은 단어인지 확인
      if (!visited.has(word) && isOneLetterDifferent(currentWord, word)) {
        visited.add(word);
        queue.push([word, step + 1]);
      }
    }
  }
  return 0; // 변환 불가능한 경우
}
// 두 단어가 한 글자만 다른지 체크하는 함수
function isOneLetterDifferent(word1, word2) {
  let diffCount = 0;
  for (let index = 0; index < word1.length; index++) {
    if (word1[index] !== word2[index]) diffCount++;

    if (diffCount > 1) return false;
  }
  return diffCount === 1;
}
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); //0
/*
예시 (hit → cog)
시작: 큐 [['hit', 0]]
1단계: hit과 한 글자 차이 나는 hot을 찾음 → 큐 [['hot', 1]]
2단계: hot과 한 글자 차이 나는 dot, lot을 찾음 → 큐 [['dot', 2], ['lot', 2]]
3단계:
dot에서 dog를 찾음 → 큐 [['lot', 2], ['dog', 3]]
lot에서 log를 찾음 → 큐 [['dog', 3], ['log', 3]]
4단계:
dog에서 드디어 cog를 찾음! → step + 1인 4를 리턴하고 종료.
*/
