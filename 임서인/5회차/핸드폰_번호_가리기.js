// https://school.programmers.co.kr/learn/courses/30/lessons/12948
//  lv 01

/*
function solution(number,size=0) {
    size = number.length
    return '*'.repeat(size-4) +number.slice(size-4)
}
*/

// 리팩토링

function solution(number) {
  return '*'.repeat(number.length - 4) + number.slice(-4);
}
