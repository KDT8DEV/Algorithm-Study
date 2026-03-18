function solution(str1, str2) {
  return Number(str2.includes(str1));
}

// 문제풀이
// includes는 배열도 있지만 문자열자체에 적용 가능!!
// 그냥 조건? 1:0; 도 깔끔
// 가독성이 삼항연산자가 더 좋은 것 같음
