// https://school.programmers.co.kr/learn/courses/30/lessons/12941

// lv.02
// 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

// 예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

// A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
// A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
// A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
// 즉, 이 경우가 최소가 되므로 29를 return 합니다.

// 배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 A, B의 크기 : 1,000 이하의 자연수
// 배열 A, B의 원소의 크기 : 1,000 이하의 자연수

// 풀이
// 최소,최대를 뽑아내서 (최소*최대)한 값을 구하기

function solution1(A, B, max = 0, min = 0) {
  var answer = 0;

  Math.min(...A);
  let minIdx = A.findIndex((e) => e == Math.min(...A));
  console.log(minIdx);

  Math.max(...B);
  max = B.find((e) => e == Math.max(...B));
  console.log(min, max);
  console.log(A, B);
  answer += min * max;

  return answer;
}
// 최소,최대를 뽑아서 splice하고

// 문제 풀다가 엥? 했다
// Math객체도 순회
// findIndex도 순회
// while도 순회
// splice도 순회라는거임!
// 4순회 ㄷㄷ

// 생각해보니!!!!!!! 순회할거면!!!!!!
// splice를 쓰면 안됨!!!!
//

function solution2(A, B, max = 0, min = 0) {
  var answer = 0;

  // while(){

  min = Math.min(...A);
  max = Math.max(...B);
  console.log(min, max);
  answer += min * max;

  A.splice();
  // }
  let size = A.length;
  for (let i = 0; i < size; i++) {
    min = Math.min(min, A[i + 1]);
    max = Math.max(max, B[i + 1]);
  }

  return answer;
}
//

//성공
function solutionH(A, B, max = 0, min = 0, answer = 0) {
  while (A.length) {
    min = Math.min(...A);
    max = Math.max(...B);
    A.splice(
      A.findIndex((e) => e == min),
      1
    );
    B.splice(
      B.findIndex((e) => e == max),
      1
    );
    answer += min * max;
  }
  return answer;
}
// 효율성에서 탈락!!!!!!!끼애애애애애애액
// splice가 문제였음

function solution(A, B, answer = 0) {
  A.sort((a, b) => a - b); // [1,2,4]
  B.sort((a, b) => b - a); // [5,4,4]
  while (A.length) {
    answer += A.shift() * B.shift();
  }
  return answer;
}

// 코드정리
function solution(A, B) {
  A.sort((a, b) => a - b); // [1,2,4]
  B.sort((a, b) => b - a); // [5,4,4]
  return A.reduce((a, e, i) => (a += e * B[i]), 0);
}
console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
