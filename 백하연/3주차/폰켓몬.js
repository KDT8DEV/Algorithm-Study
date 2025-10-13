/* 문제 요점
 * 총 N 마리의 폰켓몬 중에서 N/2 마리를 가져가도 좋다
 * 뽑아도 최대한 많이, 중복 없이 뽑고 싶어한다? -> 중복없이 최대한 몇 마리를 뽑을 수 있냐는 문제!
 * 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return
 */
function solution(nums) {
  // 중복되지 않는, 선택 가능한 포켓몬의 수를 구하는 것
  const set = new Set(nums)

  return Math.min(set.size, nums.length / 2)
}

solution([3, 1, 2, 3]) // 2
solution([3, 3, 3, 2, 2, 4]) // 3
solution([3, 3, 3, 2, 2, 2]) // 2
