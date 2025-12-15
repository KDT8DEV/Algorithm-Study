function solution(n, control) {
  control.split('').forEach((cur) => {
    if (cur == 'w') {
      n += 1;
    } else if (cur == 's') {
      n -= 1;
    } else if (cur == 'd') {
      n += 10;
    } else {
      n -= 10;
    }
  });
  return n;
}
// control에 따라 n의 값을 변화시키는 함수
