/** 중요한 단어를 스포 방지
 * 카카오톡은 메시지의 일부를 가려두었다가, 클릭했을 때만 공개되는 스포 방지 기능을 제공합니다. 이 기능을 활용하면 중요한 정보를 가리고 보낼 수 있습니다.
 *
 * 무지는 이 기능을 이용해 하나의 메시지 곳곳에 스포 방지 기능을 적용해 당신에게 보냈습니다.
 * 당신은 메시지 시작부터 왼쪽 → 오른쪽 순서로 스포 방지 구간을 하나씩 클릭해 공개되는 단어들 중, 중요한 단어가 몇 개인지 확인하려 합니다.
 *
 * 단어 및 중요한 단어 규칙
 *
 * 단어는 공백으로 구분되며, 알파벳 소문자와 숫자로만 구성된 연속된 문자열입니다.
 * 단어를 구성하는 문자들의 인덱스 중 하나 이상이 스포 방지 구간에 포함될 경우, 해당 단어는 스포일러 방지 단어로 간주합니다.
 * 즉, 단어 내 일부 문자에만 스포일러 방지 기능이 적용되더라도, 해당 단어 전체를 스포일러 방지 단어로 간주합니다.
 * 한 단어가 여러 개의 스포 방지 구간에 걸쳐 있을 수 있으며, 하나의 스포 방지 구간에 여러 단어가 포함될 수 있습니다.
 * 스포 방지 구간을 클릭해 단어의 모든 문자가 공개되었을 때, 그 단어가 아래 조건을 모두 만족하면 중요한 단어입니다.
 * 스포 방지 단어여야 합니다.
 * 메시지의 스포 방지 구간이 아닌 구간(= 어떤 스포 방지 구간에도 속하지 않는 모든 구간: 각 구간의 앞·사이·뒤 포함)에 등장한 적이 없어야 합니다.
 * 이전에 공개된 스포 방지 단어와 중복되지 않아야 합니다.
 * 여러 단어가 동시에 공개된 경우, 왼쪽부터 순서대로 하나씩 중요한 단어인지 판단합니다.
 * 무지가 당신에게 보내온 메시지를 나타내는 문자열 message와 스포 방지가 적용된 구간을 나타내는 2차원 정수 배열 spoiler_ranges가 매개변수로 주어질 때, 스포 방지 단어 중 중요한 단어의 수를 return 하도록 solution 함수를 완성해 주세요.
 *
 *
 */
function solution(message, spoiler_ranges) {
  // 1. 어떤 단어가 스포 방지 단어인지?
  const isSpoiler = Array.from({ length: message.length }, () => false);

  for (const [start, end] of spoiler_ranges) {
    for (let i = start; i <= end; i++) {
      isSpoiler[i] = true;
    }
  }

  const matches = [...message.matchAll(/[a-z0-9]+/g)].map((match) => {
    const [word] = match;
    const start = match.index;
    const end = match.index + word.length - 1;

    return { word, start, end };
  });

  let count = 0;

  const spoilerWords = new Set(
    matches
      .filter(({ start, end }) => isSpoiler.slice(start, end + 1).some((isSpoier) => isSpoier))
      .map(({ word }) => word),
  );
  const nonSpoilerWords = new Set(
    matches
      .filter(({ start, end }) => isSpoiler.slice(start, end + 1).every((isSpoier) => !isSpoier))
      .map(({ word }) => word),
  );

  let seenWords = new Set();
  for (const { word } of matches) {
    if (spoilerWords.has(word) && !nonSpoilerWords.has(word)) {
      if (seenWords.has(word)) continue;

      seenWords.add(word);
      count++;
    }
  }

  return count;
}

console.log(
  solution('here is muzi here is a secret message', [
    [0, 3],
    [23, 28],
  ]),
); // 1
console.log(
  solution('my phone number is 01012345678 and may i have your phone number', [
    [5, 5], // o
    [25, 28], // 567
    [34, 40], // may i
    [53, 59], // one num
  ]),
); // 4

/**
 * 핵심 패턴 - 인덱스 마킹 패턴 - "이 위치가 특정 조건에 해당하나?"를 미리 배열에 표시해두고, 나중에 O(1)로 조회하는 방식
 * 비슷한 상황:
 * 특정 구간이 색칠되어 있는지
 * 특정 위치가 방문된 적 있는지
 * 특정 범위에 속하는지
 * 이런 문제가 나오면 "범위만큼 배열에 미리 표시해두고 조회"를 떠올려볼 것.
 */
