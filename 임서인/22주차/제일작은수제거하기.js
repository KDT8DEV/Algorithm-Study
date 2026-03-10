function solution(arr, answer = []) {
  let min = Infinity;
  arr.forEach((e) => {
    if (min > e) min = e;
  });
  arr.splice(arr.indexOf(min), 1);
  return arr.length == 0 ? [-1] : arr;
}

// 문제 풀이
// min으로 최소값을 정의하고
// arr.forEach로 최소값을 찾고
// arr.splice로 최소값을 제거하고
// arr.length가 0이면 [-1]을 반환하고
// 아니면 arr를 반환
