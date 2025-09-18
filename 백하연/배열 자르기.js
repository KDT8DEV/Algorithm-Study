/**
 * 문제 설명 :
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 */


// slice 메서드는 첫 번째 인수로 전달받은 인덱스부터 두 번째 인수로 전달받은 인덱스 이전까지 요소들을 복사하여 배열로 반환
// 전달받은 numbers 배열을 slice 함수를 사용해 num1과 num2를 인수로 전달
// num2 인덱스까지 요소들을 복사해야하는 num2에 1을 더한 값을 전달
function solution(numbers, num1, num2) { // 1, 3 -> 2, 3, 4
  return numbers.slice(num1, num2 + 1)
}
