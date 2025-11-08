function solution(record, answer = []) {
  let nameMap = new Map(); // 유저 객체
  let idxMap = new Map();
  record.forEach((e, idx) => {
    let inform = e.split(' ');

    const direction = inform[0]; // Enter
    const userId = inform[1]; // uid1234
    const nickname = inform[2]; // Muzi
    const hasUserId = nameMap.has(userId);
    let deleteFlag = false;

    if (direction == 'Enter') {
      if (deleteFlag) {
        nameMap.set(userId, nickname);
        idxMap.set(userId, [...(idxMap.get(userId) || []), idx]);
      } else {
        nameMap.set(userId, nickname);
        idxMap.set(userId, [idx]);
        answer.push(`${nickname}님이 들어왔습니다.`);
      }
    } else if (direction == 'Leave') {
      if (hasUserId) {
        answer.push(`${nameMap.get(userId)}님이 나갔습니다.`);
        // nameMap.delete(userId);
        deleteFlag = true;
      } else {
        console.log('존재하지 않는 아이디입니다.');
      }
    } else if (direction == 'Change') {
      if (hasUserId) {
        nameMap.set(userId, nickname);
        idxMap.set(userId, [...(idxMap.get(userId) || []), idx]);
        console.log(idxMap.get(userId), '인덱스값');
        idxMap.get(userId).forEach((e) => {
          console.log(e);
          let s = answer[e];
          console.log(s, 'S값');
          const pos = s.indexOf('님');

          answer[e] = nickname + s.slice(pos);
        });
      } else {
        console.log('존재하지 않는 아이디입니다.');
      }
    } else {
      console.log('다른 direction 등장');
    }
  });
  answer.forEach((e) => {
    e.at();
  });
  console.log(nameMap);
  console.log(idxMap);
  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
// 1234 0 2
// 4567
/*
그대로 찍히고 닉네임을 수정하는 방향으로 하고싶음

님이 들어왔습니다.
님이 나갔습니다.
answer = [] {userId}님이 들어왔습니다.
for userId -->nickname
directions = {userId:nickname}
answer={userId1:["pd들어오심0","ryan이 나가심2"],userId2:['아ㅏㅇㄹㄹㄹㅇ1'],userId3:["머시기님이 나갔습니다"]}
[userId]
{userId:[Prodos님이 들어옴,Ryan님이 나감]} nickname구현

흠,,,,,,,,
    흠,,,,,,,,,
        훔,,,,,,,,,,

set id
Enter {id:name}
Leave {id:name}
Change {id:name}*/

// 아니 개빡치네 같은 id로 enter해도 change랑 똑같은 효과였던거임!!!!!!!!!!!
// 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ니~~~~~~~~~~~~~~~~~~~
// 휴ㅠㅠㅠㅠㅠㅠ~~~~~~~~
// 휴~~~~~~~~~~~~~~~~~~~~~~~~
[
  '{userid}님이 들어왔습니다.',
  '{userid} 들어왔습니다.',
  '{Muzi}님이 나갔습니다.',
  '{Prodo}님이 들어왔습니다.',
];

// 결국은 새로 업데이트하는 것을 납득하고 말았다..
function solution(record, answer = [], realAnswer = []) {
  let nameMap = new Map(); // 유저 객체
  record.forEach((e, idx) => {
    let inform = e.split(' ');

    const direction = inform[0];
    const userId = inform[1];
    const nickname = inform[2]; // delete에서는
    const hasUserId = nameMap.has(userId);

    if (direction == 'Enter') {
      nameMap.set(userId, nickname);
      answer.push(`${userId}님이 들어왔습니다.`);
    } else if (direction == 'Leave') {
      if (hasUserId) {
        answer.push(`${userId}님이 나갔습니다.`);
      } else {
        console.log('존재하지 않는 아이디입니다.');
      }
    } else if (direction == 'Change') {
      if (hasUserId) {
        nameMap.set(userId, nickname);
      } else {
        console.log('존재하지 않는 아이디입니다.');
      }
    } else {
      console.log('다른 direction 등장');
    }
  });

  answer.forEach((e) => {
    let index = answer[0].indexOf('님');
    let userId = e.substr(0, index);
    realAnswer.push(e.replace(userId, nameMap.get(userId)));
  });
  return realAnswer;
}
// 근데 테스트 케이스만 되고 제출에서는 6.3점임,,,,
