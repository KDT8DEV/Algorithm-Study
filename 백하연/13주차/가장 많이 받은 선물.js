/**
 * 시뮬레이션 알고리즘
 * @param {string[]} friends 친구들의 이름
 * @param {string[]} gifts 친구들이 주고 받은 선물 기록
 * @returns  다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return
 */
function solution(friends, gifts) {
  const friendsMap = new Map();

  friends.forEach((friend) => {
    friendsMap.set(friend, { given: 0, received: 0 });
  });

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(' ');
    friendsMap.set(giver, {
      ...friendsMap.get(giver),
      given: friendsMap.get(giver).given + 1,
    });
    friendsMap.set(receiver, {
      ...friendsMap.get(receiver),
      received: friendsMap.get(receiver).received + 1,
    });
  });

  const giftRecord = {};
  friends.forEach((friend) => {
    giftRecord[friend] = {};
  });

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(' ');
    giftRecord[giver][receiver] = (giftRecord[giver][receiver] || 0) + 1;
  });

  // 선물 지수 = 준 선물 수 - 받은 선물 수
  const giftIndexes = {};
  for (const [friend, { given, received }] of friendsMap.entries()) {
    giftIndexes[friend] = given - received;
  }

  // 각 친구가 다음 달에 받을 선물의 수
  const nextMonthGifts = {};
  friends.forEach((friend) => {
    nextMonthGifts[friend] = 0;
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friend1 = friends[i];
      const friend2 = friends[j];

      const friend1ToFriend2 = giftRecord[friend1][friend2] || 0;
      const friend2ToFriend1 = giftRecord[friend2][friend1] || 0;

      // 1: 더 많이 준 사람이 선물 받음
      if (friend1ToFriend2 > friend2ToFriend1) {
        nextMonthGifts[friend1]++;
      } else if (friend2ToFriend1 > friend1ToFriend2) {
        nextMonthGifts[friend2]++;
      } else {
        // 2: 주고받은 수가 같으면 선물 지수가 높은 사람이 받음
        if (giftIndexes[friend1] > giftIndexes[friend2]) {
          nextMonthGifts[friend1]++;
        } else if (giftIndexes[friend2] > giftIndexes[friend1]) {
          nextMonthGifts[friend2]++;
        }
      }
    }
  }

  // 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return
  return Math.max(...Object.values(nextMonthGifts));
}

solution(
  ['muzi', 'ryan', 'frodo', 'neo'],
  [
    'muzi frodo',
    'muzi frodo',
    'ryan muzi',
    'ryan muzi',
    'ryan muzi',
    'frodo muzi',
    'frodo ryan',
    'neo muzi',
  ]
); // 2
solution(
  ['joy', 'brad', 'alessandro', 'conan', 'david'],
  ['alessandro brad', 'alessandro joy', 'alessandro conan', 'david alessandro', 'alessandro david']
); // 4
solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']); // 0

// 다른 사람의 풀이
function solution(friends, gifts) {
  const length = friends.length;
  const giftPoints = new Array(length).fill(0);
  const index = {};
  const record = [];
  const points = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    record[i] = new Array(length).fill(0);
    index[friends[i]] = i;
  }

  for (const gift of gifts) {
    const [giver, taker] = gift.split(' ');
    record[index[giver]][index[taker]] += 1;
    giftPoints[index[giver]] += 1;
    giftPoints[index[taker]] -= 1;
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (record[i][j] > record[j][i]) {
        points[i] += 1;
      } else if (record[i][j] === record[j][i]) {
        if (giftPoints[i] > giftPoints[j]) {
          points[i] += 1;
        }
      }
    }
  }
  return Math.max(...points);
}
