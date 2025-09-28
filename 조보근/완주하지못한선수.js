/* 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요. 

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다. */

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
//이게 왜 되누..?

/*
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    for (let j = 0; j < participant.length; j++) {
      if (completion[i] === participant[j]) {
        participant.splice(j, 1);
        break;
      }
    }
  }
  return participant[0];
} 이렇게하면 값 나오잖아! 나오잖아! 다 맞은거잖아! 대체 왜 효율성테스트에서 실패야?? 효율 좋자나!!!
*/
/*
function solution(participant, completion) {
  let answer = participant.filter(function (person) {
    //participant의 요소 하나씩 person에 넣어
    return !completion.includes(person); //completion에 person이 포함되어있어?
  });
  return answer[0]; //아...이렇게 하면 마지막꺼만 안나와.. 다시 짜야해 Fuck!
}
  */
