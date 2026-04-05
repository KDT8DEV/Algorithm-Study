/*
 * 푸드 파이트 대회
 * 음식을 배치하는 순서를 문자열로 반환
 */
function solution(food) {
  let left = [];
  for (let i = 1; i < food.length; i++) {
    left.push(String(i).repeat(Math.floor(food[i] / 2)));
  }

  return left.join('') + '0' + [...left].reverse().join('');
}
console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"
