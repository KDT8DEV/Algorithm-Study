/**문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// 하나씩 붙여서 모든 경우 만들어야 한다 => DFS
// 소수 구할 땐 Math.sqrt()로 제곱근까지만 for문
function solution(numbers) {
  // 중복 제거를 위한 Set (같은 숫자가 여러 번 만들어질 수 있음)
  let set = new Set();

  // 각 숫자를 사용했는지 체크하는 배열 (백트래킹용)
  let visited = Array(numbers.length).fill(false);

  // DFS: 숫자를 하나씩 이어 붙이며 모든 경우의 수 생성
  function dfs(cur) {
    // cur이 빈 문자열이 아니면 (즉, 숫자가 하나라도 만들어졌으면)
    if (cur !== "") {
      // 문자열을 숫자로 변환해서 Set에 저장 (중복 자동 제거)
      set.add(Number(cur));
    }

    // numbers에 있는 모든 숫자를 하나씩 선택
    for (let i = 0; i < numbers.length; i++) {
      // 이미 사용한 숫자는 건너뜀 (같은 인덱스 재사용 방지)
      if (visited[i]) continue;

      // 현재 숫자를 사용했다고 표시
      visited[i] = true;

      // 현재 숫자를 이어 붙여 다음 단계로 DFS 진행
      dfs(cur + numbers[i]);

      // 탐색이 끝났으면 다시 사용하지 않은 상태로 되돌림 (백트래킹 핵심)
      visited[i] = false;
    }
  }

  // 초기값은 빈 문자열에서 시작
  dfs("");

  // 소수 개수를 셀 변수
  let cnt = 0;

  // Set에 있는 모든 숫자 순회
  for (let num of set) {
    // 소수라면 개수 증가
    if (isPrime(num)) cnt++;
  }

  // 최종 소수 개수 반환
  return cnt;
}

// 소수 판별 함수
function isPrime(n) {
  // 0과 1은 소수가 아니므로 제외
  if (n < 2) return false;

  // 2부터 √n까지만 나눠보면 충분 (시간 최적화)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 나누어 떨어지면 소수가 아님
    if (n % i == 0) {
      return false;
    }
  }

  // 끝까지 나눠지지 않으면 소수
  return true;
}

//========================================================//
// let numbers = "17"; // 3

// let set = new Set();
// let visited = Array(numbers.length).fill(false);

// function dfs(cur) {
//   if (cur !== "") {
//     set.add(Number(cur));
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     if (visited[i]) continue;

//     visited[i] = true;
//     dfs(cur + numbers[i]);
//     visited[i] = false;
//   }
// }

// dfs("");

// let cnt = 0;
// for (let num of set) {
//   if (isPrime(num)) cnt++;
// }

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(cnt);
