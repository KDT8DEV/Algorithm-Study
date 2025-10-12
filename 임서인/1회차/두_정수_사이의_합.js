// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한
// 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 내 코드

solution = (a, b) => {
  let sum = 0;
  if (b < a) {
    // b보다 a가 크면 자리바꿔라~
    let tmp = a;
    a = b;
    b = tmp;
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// 맘에 드는 다른 사람 코드
function adder(a, b, s = 0) {
  // s=0으로 미리 sum 값 초기화 해놓음
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  // 굳이 자리바꾸지 않고도 Math.min, Math.max로 깔끔하게 처리함
  return s;
}

// //solution = (a, b) => {
// let sum = 0;
// if (b < a) {
// // b가 a보다 작으면 자리바꿔라~
// let tmp = a;
// a = b;
// b = tmp;
// } // 무조건 큰 값을 뒤에 두고
// for (let i = a; i <= b; i++) {
// sum += i; // 작은 값에서부터 큰 값까지 다 더하렴~
// }
// return sum;
// };
