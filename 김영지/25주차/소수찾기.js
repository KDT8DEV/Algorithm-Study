/**문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
 */

/**나의 풀이 */
function solution(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let result = isPrime.filter((v) => v).length;

  return result;
}

//===============================================//
// let n = 10; // 4

// let isPrime = Array(n + 1).fill(true);
// isPrime[0] = isPrime[1] = false;

// for (let i = 2; i * i <= n; i++) {
//   if (isPrime[i]) {
//     for (let j = i * i; j <= n; j += i) {
//       isPrime[j] = false;
//     }
//   }
// }

// let result = isPrime.filter((v) => v).length;

// console.log(result);
//===================================================//
// 실패 : 시간복잡도 n2
// let result = [];

// for (let i = 1; i <= n; i++) {
//   let cnt = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) cnt++;
//   }
//   if (cnt === 2) {
//     result.push(i);
//   }
// }

// console.log(result);
