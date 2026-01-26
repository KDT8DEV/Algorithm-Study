/**
 * Finn은 요즘 수학공부에 빠져 있습니다.
 * 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
 * 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
 *
 * 1 + 2 + 3 + 4 + 5 = 15
 * 4 + 5 + 6 = 15
 * 7 + 8 = 15
 * 15 = 15
 * 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
 */
// 효율성 테스트 실패 (시간 초과)
/*
function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) count++;
      if (sum > n) break;
    }
  }

  return count;
}
*/

// n의 약수 중 홀수의 개수
// 연속된 자연수의 합으로 n을 만드는 공식이 k개의 연속된 수의 합일 때, n의 홀수 약수와 일대일 대응된다는 수학적 사실을 이용
/* 실패...
function solution(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
*/

// 투 포인터(슬라이딩 윈도우) -> 효율성 실패 (시간 초과)
// 투 포인터 방식임에도 불구하고 효율성 테스트에서 실패했다면, n의 크기가 매우 크거나 테스트 케이스가 아주 많기 때문일 수 있다.
/*
function solution(n) {
  let count = 0;
  let left = 1;
  let right = 1;
  let sum = 1;

  while (left <= n) {
    if (sum < n) {
      // 합이 n보다 작으면 범위를 오른쪽으로 확장
      right++;
      sum += right;
    } else if (sum > n) {
      // 합이 n보다 크면 왼쪽 끝을 줄여서 합을 감소
      sum -= left;
      left++;
    } else {
      // 합이 정확히 n이면 카운트하고, 다음 탐색을 위해 왼쪽 이동
      count++;
      sum -= left;
      left++;
    }
  }
  return count;
}
*/
function solution(n) {
  let count = 0;

  // 1부터 n까지의 숫자 중 '홀수'만 확인
  for (let i = 1; i <= n; i += 2) {
    // n을 i(홀수)로 나누었을 때 나머지가 0이면,
    // 그 홀수는 n의 약수이며, 동시에 연속된 자연수의 합으로 n을 만드는 방법...
    if (n % i === 0) {
      count++;
    }
  }

  return count;
}
console.log(solution(15)); // 4
