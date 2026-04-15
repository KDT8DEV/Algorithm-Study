function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}

// 문제 풀이
// replaceAll을 사용해서 문자열의 모든 'm'을 'rn'으로 바꿔서 반환

// replace()는 첫 번째 'm'만 바꾸니까 replaceAll()을 사용해야 함

// 정규표현식을 사용해서도 풀 수 있음
function solution(rny_string) {
  return rny_string.replace(/m/g, 'rn');
}

// /m/g는 'm'을 전역으로(global) 찾으라는 뜻

// split()과 join()을 사용해서도 풀 수 있음
function solution(rny_string) {
  return rny_string.split('m').join('rn');
}
