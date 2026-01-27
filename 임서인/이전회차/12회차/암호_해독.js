function solution(cipher, code) {
  return cipher
    .split('')
    .filter(($, i) => (i + 1) % code == 0)
    .join('');
}
// 문제풀이
// cipher 를 한 글자씩 쪼갬
// filter 로 index +1 이 code 의 배수인 것만 걸러내기
// 걸러낸 문자들을 다시 합쳐서 리턴
