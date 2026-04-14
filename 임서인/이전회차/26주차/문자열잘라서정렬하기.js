function solution(myString) {
  return myString
    .split('x')
    .filter((v) => v)
    .sort();
}

// 문제 풀이
// split으로 "x" 기준으로 나누고 filter로 빈 문자열 제거 후 sort로 사전순 정렬해서 반환

// filter(Boolean)으로 빈 문자열 제거 가능
function solution(myString) {
  return myString.split('x').filter(Boolean).sort();
}

// 정규표현식으로 "x"를 ""로 replace한 후 sort

function solution(myString) {
  return myString.replace(/x/g, '').split('').sort();
}
