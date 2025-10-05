// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// lv01

// function solution(s,arr=[],mid="") {
//     mid=Math.floor(s.length/2)
//     return s.length%2==0?s[mid-1]+s[mid]:s[mid];
// }

// 다른 사람 코드
const solution = (s) => {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);
};
