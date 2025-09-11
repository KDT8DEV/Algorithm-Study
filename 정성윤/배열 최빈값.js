// 9/9

function solution(numbers) {
  const counts = {};

  // 각 숫자의 빈도 세기
  numbers.forEach(num => {
    if (!counts[num]) counts[num] = 0;
    counts[num] += 1;
  });

  let maxCount = Math.max(...Object.values(counts));
  let modes = [];

  for (let num in counts) {
    if (counts[num] === maxCount) {
      modes.push(Number(num));
    }
  }

  // 여러 개면 -1, 하나면 그 값 반환
  return modes.length === 1 ? modes[0] : -1;
}

console.log(solution([1, 2, 2, 3, 3])); // -1
console.log(solution([1, 2, 2, 3]));    // 2

  // ...**전개 연산자(Spread Operator)**입니다.
// Math.max(...Object.values(counts))에서
// Object.values(counts)는 [1, 2, 2]처럼 배열을 만듭니다.

// ...을 붙이면
// Math.max(1, 2, 2)처럼 배열의 각 요소를 개별 인자로 펼쳐줍니다.

// 즉, 배열을 함수의 여러 인자로 "펼쳐서" 전달하는 역할입니다.
// return modes.length === 1 ? modes[0] : -1;는
// 삼항 연산자를 사용한 조건문입니다.

// modes.length === 1이면(최빈값이 하나뿐이면) modes[0]을 반환합니다.
// 그렇지 않으면(최빈값이 여러 개면) -1을 반환합니다