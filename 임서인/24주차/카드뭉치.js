function solution(cards1, cards2, goal) {
  let result = 'Yes';
  for (let word of goal) {
    if (word === cards1[0]) cards1.shift();
    else if (word === cards2[0]) cards2.shift();
    else {
      result = 'No';
      break;
    }
  }
  return result;
}

// 각 카드뭉치의 첫번째 값들과 비교해서 없으면 No
// 비교된 값은 shift로 뺴줌
// 챗지피티
// let i in goal보다
// let word of goal이 더 직관적
