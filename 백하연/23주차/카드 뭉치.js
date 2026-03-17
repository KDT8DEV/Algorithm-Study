/** 카드 뭉치
 * 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.
 * 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
 * 한 번 사용한 카드는 다시 사용할 수 없습니다.
 * 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
 * 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
 */
function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;
  for (const word of goal) {
    if (index1 < cards1.length && word === cards1[index1]) {
      index1++;
    } else if (index2 < cards2.length && word === cards2[index2]) {
      index2++;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'Yes'
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'No'

// 다른 사람의 풀이
function other(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) cards1.shift();
    else if (cards2[0] === word) cards2.shift();
    else return 'No';
  }
  return 'Yes';
}
console.log(other(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'Yes'
console.log(other(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'No'
