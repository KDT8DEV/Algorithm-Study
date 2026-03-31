// 2레벨 소수찾기
function solution(numbers) {
  const arr = numbers.split('');
  const set = new Set();

  function makeNumber(current, used) {
    if (current !== '') {
      const num = Number(current);
      if (isPrime(num)) {
        set.add(num);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      makeNumber(current + arr[i], used);
      used[i] = false;
    }
  }

  // 소수찾기
  function isPrime(num) {
    if (num < 2) return false;

    let prime = [];

    for (let i = 2; i <= num; i++) {
      if (prime.length === 0) {
        prime.push(i);
        continue;
      }

      let isPrime = true;

      for (let j = 0; j < prime.length; j++) {
        if (prime[j] > Math.sqrt(i)) break;

        if (i % prime[j] === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) prime.push(i);
    }

    return prime.includes(num);
  }

  makeNumber('', Array(arr.length).fill(false));
  //used = [false, false, false]
  //used = [true, false, false]
  //current = '0'
  //used = [true, true, false]
  //current = '01'
  //used = [true, true, true]
  //current = '011'

  return set.size;
}

// split()으로 문자열을 숫자 배열로 분리
// 재귀(makeNumber)로 숫자를 하나씩 이어붙임
// used 배열로 사용한 숫자 관리
// Number()로 문자열을 숫자로 변환
// isPrime()으로 소수 여부 검사
// Set에 저장
// 마지막에 set.size 반환 → 만들어진 소수 개수 출력

// 사용한 숫자 관리를 어떻게 해야할지 몰라서 챗지피티가 알려줌
