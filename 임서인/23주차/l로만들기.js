function solution(myString) {
  return myString
    .split('')
    .map(c => (c < 'l' ? 'l' : c))
    .join('');
}
// 문제 풀이
// JS에서 문자열은 내부적으로 유니코드 값으로 비교돼서
// 생각하는 순서대로 비교 가능

// 다른사람
const solution = myString => myString.replace(/[a-k]/g,'l')
