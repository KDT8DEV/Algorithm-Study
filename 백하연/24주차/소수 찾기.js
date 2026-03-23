/* 소수 찾기
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 * 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 * (1은 소수가 아닙니다.)
 */
// 효율성 테스트 실패 (시간 초과)
function solution(n) {
  let count = 0;

  function isPrime(x) {
    if (x < 2) return false;

    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  return arr.filter((v) => v === 2 || v % 2 !== 0).filter((v) => v === 3 || v % 3 !== 0).length;
}

function solution(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}

// 다른 사람의 풀이
function other(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j <= Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

console.log(other(10));
console.log(other(5));
