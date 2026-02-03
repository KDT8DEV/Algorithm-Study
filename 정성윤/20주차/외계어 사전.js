function solution(spell, dic) {
  // # spell을 정렬한 기준 문자열 생성
  const target = spell.slice().sort().join('');

  // # dic의 각 단어를 정렬해 spell과 완전히 일치하는지 확인
  for (const word of dic) {
    if (word.split('').sort().join('') === target) {
      return 1;
    }
  }

  // # 조건을 만족하는 단어가 없으면 2
  return 2;
}
