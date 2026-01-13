function solution(myString, pat) {
  let changed = myString
    .split('')
    .map((ch) => (ch === 'A' ? 'B' : 'A'))
    .join('');

  return changed.includes(pat) ? 1 : 0;
}
// 함수설명
// includes 메서드는 배열이나 문자열이 특정 요소를 포함하고 있는지를 판단하여 true 또는 false를 반환합니다.