/**
 *
1번 지표 : 라이언형(R) vs 튜브형(T)
2번 지표 : 콘형(C) vs 프로도형(F)
3번 지표 : 제이지형(J) vs 무지형(M)
4번 지표 : 어피치형(A) vs 네오형(N)

n개의 질문이 있고 각 질문에는 7개의 선택지가 있다. (매우 비동의, 비동의, 약간 비동의, 모르겠음, 약간 동의, 동의, 매우 동의)

* 매우 동의, 매우 비동의 - 3점
* 동의, 비동의 - 2점
* 약간 동의, 약간 비동의 - 1점
* 모르겠음 - 0점

 *
 * @param {*} survey "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"
 * @param {*} choices 1 매우 비동의 2 비동의 3 약간 비동의 4 모르겠음 5 약간 동의 6 동의 7 매우 동의
 * @returns "RCJA"
 */
function solution(survey, choices) {
  let result = '';

  let type = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((question, index) => {
    const [disagree, agree] = question.split('');

    // 1, 2, 3 -> disagree
    // 5, 6, 7 -> agree
    if (choices[index] < 4) {
      type[disagree] += 4 - choices[index];
    } else {
      type[agree] += choices[index] - 4;
    }
  });

  // 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단
  result += type.R >= type.T ? 'R' : 'T';
  result += type.C >= type.F ? 'C' : 'F';
  result += type.J >= type.M ? 'J' : 'M';
  result += type.A >= type.N ? 'A' : 'N';

  return result;
}
console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); // "RCJA"

// 다른 사람의 풀이
function other(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}
console.log(other(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(other(['TR', 'RT', 'TR'], [7, 1, 3]));
