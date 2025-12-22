function solution(survey, choices) {
  // 성격 유형 점수 저장용 객체
  const scores = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };

  // 점수 계산
  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split('');
    const choice = choices[i];

    if (choice < 4) { // 비동의 계열
      scores[disagree] += 4 - choice;
    } else if (choice > 4) { // 동의 계열
      scores[agree] += choice - 4;
    }
    // choice == 4 → 점수 없음
  }

  // 지표별 최종 성격 유형 결정
  const result = [];
  result.push(scores['R'] >= scores['T'] ? 'R' : 'T');
  result.push(scores['C'] >= scores['F'] ? 'C' : 'F');
  result.push(scores['J'] >= scores['M'] ? 'J' : 'M');
  result.push(scores['A'] >= scores['N'] ? 'A' : 'N');

  return result.join('');
}