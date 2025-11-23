// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution1(arr, com) {
  return com.map((e) => {
    let test = [...arr];
    let startIndex = e[0] - 1;
    return test.splice(startIndex, e[1]).sort((a, b) => a - b)[2];
  });
}
// splice 는 원본 배열을 해친다 => slice를 써라!
// [2]가 아니라 [e[2]]임

function solution(arr, com) {
  return com.map((e) => {
    let startIndex = e[0] - 1;
    let arr1 = arr.slice(startIndex, e[1]);
    let sortedArr = arr1.sort((a, b) => a - b);
    return sortedArr[e[2] - 1];
  });
}
// 요구조건을 [0]시작인덱스, [1]끝인덱스, [2]정렬후 인덱스로 나누어
// slice로 잘라낸 후 sort로 정렬하고
// [2]번째 요소를 리턴한다
