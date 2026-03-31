// 스포방지 단어 추출: spoiler_ranges를 순회하면서 각 구간의 좌우로 공백을 기준으로 단어 경계를 찾아 단어 단위로 확장 → 스포방지 단어 배열 생성
// 공개 단어 Set 생성: 스포방지 구간에 속하지 않는 일반 구간의 텍스트를 split해서 공개된 단어들을 Set에 저장
// 중요 단어 판별: 스포방지 단어 배열을 순회하면서, 해당 단어가 공개 Set에 없으면 → result++ 하고 Set에 추가

function solution(message, spoiler_ranges) { //"here is muzi here is a secret message"
  const isSpoiler = new Array(message.length).fill(false); // FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
  // [0,3] [23,28]
  for (const [start, end] of spoiler_ranges) {
    for (let i = start; i <= end; i++) {
      isSpoiler[i] = true; // TTTTFFFFFFFFFFFFFFFFFFFFFFFTTTTTTFFFFFFF
    }
  }

  const spoilerWords = [];
  const openWords = new Set();

  let i = 0;
  while (i < message.length) {
    if (message[i] === ' ') {
      i++;
      continue;
    }

    let j = i;
    while (j < message.length && message[j] !== ' ') j++;

    const word = message.slice(i, j);
    const wordIsSpoiler = isSpoiler.slice(i, j).some(Boolean);

    if (wordIsSpoiler) {
      spoilerWords.push(word);
    } else {
      openWords.add(word);
    }
    i = j;
  }

  let result = 0;
  for (const word of spoilerWords) {
    if (!openWords.has(word)) result++;
    openWords.add(word);
  }

  return result;
}
