/* 문제 설명
 * 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. * 예를 들면,
 * arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
 * arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
 * 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
 */

/* 문제 풀이 1
* arr.pop()은 배열의 마지막 요소를 제거
* 현재 인덱스의 요소가 다음 요소와 같다면 그 중 하나만 남기려는 것이지 마지막 요소를 제거하는 것이 아니기 때문에 잘못된 풀이
function solution(arr) {
  let answer = []
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) {
      arr.pop()
    } else {
      answer.push(arr[index])
    }
  }
  return answer
}
 */

/** 문제 풀이 2 */
function solution(arr) {
  let answer = []
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[index + 1]) {
      answer.push(arr[index])
    }
  }
  console.log(answer)

  return answer
}

solution([1, 1, 3, 3, 0, 1, 1])
solution([4, 4, 4, 3, 3])
