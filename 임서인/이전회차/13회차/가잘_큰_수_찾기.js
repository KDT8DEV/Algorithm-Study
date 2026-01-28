function solution(array) {
  let big = Math.max(...array);
  return [big, array.indexOf(big)];
}

// Math.max를 이용해 큰 값 찾기