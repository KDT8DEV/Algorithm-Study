/*
 * 완전탐색 - 소수 찾기 (LV2)
 * 문제: 숫자가 적힌 문자열 numbers로 만들 수 있는 모든 숫자의 조합 중 소수의 개수 구하기
 */
function isPrime(x) {
  if (x < 2) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

// numbers를 split한 배열과 현재까지 만든 문자열을 인자로 받는 재귀함수
function getPermutations(arr, current, set) {
  // arr: ["1", "7"], current: "", set: Set(0) {}

  // i = 0, selected = "" + "1" = "1",   rest = ["7"], isPrime(1): false, getPermutations(["7"], "1", set)
  // i = 0, selected = "1" + "7" = "17", rest = [], isPrime(17): true -> set.add(17), getPermutations([], "17", set)
  // i = 1, selected = "" + "7" = "7", rest = ["1"], isPrime(7): true -> set.add(7), getPermutations(["1"], "7", set)
  // i = 0, selected = "7" + "1" = "71", rest = [], isPrime(71): true -> set.add(71), getPermutations([], "71", set)

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const selected = current + arr[i]; // 현재 선택한 숫자 = 기존 문자열 + 이번 숫자(arr[i])
      const rest = arr.slice(0, i).concat(arr.slice(i + 1)); // 남은 숫자들 = 현재 선택한 숫자(i번째)를 제외한 나머지 숫자들, 특정 요소만 제외하고 나머지를 추출

      if (selected.length > 0) set.add(Number(selected)); // 만들어진 숫자를 숫자로 바꿔서 Set에 넣기(중복 제거)

      getPermutations(rest, selected, set); // 재귀 호출 : 남은 숫자들(rest)과 새로 만든 문자열(selected)을 넘겨줌
    }
  }
}

function solution(numbers) {
  const set = new Set();

  const nums = numbers.split('');

  getPermutations(nums, '', set);

  let count = 0;
  for (let num of set) {
    if (isPrime(num)) count++;
  }

  return count;
}
console.log(solution('17')); // 3
console.log(solution('011')); // 2

// 순열(Permutation) : 서로 다른 n개에서 r개를 뽑아 순서를 고려하여 일렬로 나열하는 경우의 수
// ["1","7"]로 순열을 만들면 "1", "7", "17", "71" 순서에 따라 다른 숫자가 나오는게 포인트
// 순열을 만드는 가장 정석적인 방법 : 자기 자신을 호출하는 재귀 함수
