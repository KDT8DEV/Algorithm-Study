/**
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 */
function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return allNumbers.reduce((acc, cur) => {
    if (!numbers.includes(cur)) {
      return acc + cur;
    }
    return acc;
  }, 0);
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// 다른 사람의 풀이
// 0 ~ 9까지 숫자의 합이 45이므로, numbers 배열의 합을 45에서 빼면 찾을 수 없는 숫자들의 합이 나온다.
function other(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(other([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(other([5, 8, 4, 0, 6, 7, 9]));
