// 1레벨 소수찾기

function solution(n) {
  let prime = [];
  for (let i = 2; i <= n; i++) {
    if (prime.length == 0) {
      prime.push(i);
      continue;
    }
    let isPrime = true;
    for (let j = 0; j < prime.length; j++) {
      if (i % prime[j] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) prime.push(i);
  }
  return prime.length;
}

// 맞긴했는데 효율성 0점 ㅠ0ㅠ
// 챗지피티는 제곱근까지만 확인하면 된다고 함
// if (prime[j] > Math.sqrt(i)) break;으로
// 제곱근보다 작은 수는 더이상 판별하지 않음

function solution(n) {
  let prime = [];
  for (let i = 2; i <= n; i++) {
    if (prime.length == 0) {
      prime.push(i);
      continue;
    }
    let isPrime = true;
    for (let j = 0; j < prime.length; j++) {
      if (prime[j] > Math.sqrt(i)) break; // 
      if (i % prime[j] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) prime.push(i);
  }
  return prime.length;
}
// 챗지피티 방식
// 하나씩 판별하지 않고 한 번에 걸러버리기
// 소수가 아닌 것들을 미리 제거하는 에라토스테네스의 체 라는 방식
function solution(n) {
  const isPrime = new Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!isPrime[i]) continue;

    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }

  return isPrime.filter((v) => v).length;
}
