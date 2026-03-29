/*
 * Summer/Winter Coding(~2018) - 소수 만들기
 * 문제: 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수 구하기
 */
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        console.log('sum', sum);

        if (isPrime(sum)) count++;
      }
    }
  }

  return count;
}
console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
