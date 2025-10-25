/* 문제 설명
 * String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
 * seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 */
function solution(seoul) {
  return `김서방은 ${seoul.findIndex((s) => s === 'Kim')}에 있다`
}
solution(['Jane', 'Kim'])

/*
 * indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있느 첫 번째 인덱스를 반환하고 찾을 수 없는 경우 -1을 반환
 * findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번쨰 요소에 대한 인덱스를 반환하고 만족하는 요소가 없으면 -1을 반환
 * 이 문제의 경우, 단순 문자열을 비교하고 복잡한 조건이 없기 때문에 indexOf를 사용하는 것이 더 좋다!
 */
function solution2(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`
}
solution2(['Jane', 'Kim'])
