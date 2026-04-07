//소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//순열 생성 함수
// 1, 2, 0

// 1, 2,
// 1, 2, 0

//1, 0,
//1, 0, 2


//1, 0, 2
//2, 0
function getPermutations(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  arr.forEach((num, i) => {//1, 2, 0
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const perms = getPermutations(rest);
    perms.forEach(p => result.push([num, ...p]));
    console.log(perms);

  });
  return result;
}

function solution(numbers) {
  const digits = numbers.split('');
  const candidates = new Set();

  for (let len = 1; len <= digits.length; len++) {
    const perms = getPermutations(digits).map(p => p.slice(0, len).join(''));
    //1,2,0 12
    //1,0,2 10 
    //2,0,1 20
    //2,1,0 21

    //= 1
    console.log(perms);

    perms.forEach(str => {
      const num = Number(str);
      candidates.add(num);
    });
  }

  let count = 0;
  candidates.forEach(num => {
    if (isPrime(num)) count++;
  });

  return count;
}

// 예시 실행
console.log(solution("17"));   // 3 (7, 17, 71)
console.log(solution("011"));  // 2 (11, 101)