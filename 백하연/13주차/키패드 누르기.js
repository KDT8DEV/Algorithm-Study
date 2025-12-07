/**
 * 문제 설명
 * 키패드 누르기
 * @param {number} numbers 순서대로 누를 번호가 담긴 배열
 * @param {string} hand 왼손잡이인지 오른손잡이인지
 */
function solution(numbers, hand) {
  let leftKeys = [1, 4, 7];
  let rightKeys = [3, 6, 9];

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let leftPosition = keypad['*'];
  let rightPosition = keypad['#'];

  let result = '';

  // *, 1, 4, 7 -> 왼손
  // #, 3, 6, 9 -> 오른손
  // 2, 5, 8, 0 -> 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락 사용
  // 만약 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용
  numbers.forEach((number) => {
    if (leftKeys.includes(number)) {
      result += 'L';
      leftPosition = keypad[number];
    } else if (rightKeys.includes(number)) {
      result += 'R';
      rightPosition = keypad[number];
    } else {
      const targetPosition = keypad[number];

      const leftDistance =
        Math.abs(leftPosition[0] - targetPosition[0]) +
        Math.abs(leftPosition[1] - targetPosition[1]);
      const rightDistance =
        Math.abs(rightPosition[0] - targetPosition[0]) +
        Math.abs(rightPosition[1] - targetPosition[1]);

      if (leftDistance < rightDistance) {
        result += 'L';
        leftPosition = targetPosition;
      } else if (leftDistance > rightDistance) {
        result += 'R';
        rightPosition = targetPosition;
      } else {
        if (hand === 'right') {
          result += 'R';
          rightPosition = targetPosition;
        } else {
          result += 'L';
          leftPosition = targetPosition; 
        }
      }
    }
  });
  console.log(result);
  return result;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // "LRLLLRLLRRL"
