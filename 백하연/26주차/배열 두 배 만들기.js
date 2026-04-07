/*
 * 배열 두 배 만들기
 * 정수 배열 numbers의 각 원소에 두 배를 한 원소를 가진 배열을 반환
 */
function solution(numbers) {
  return numbers.map((number) => number * 2);
}

// 다른사람의 풀이 : reduce
// reduce 방식: [...a, b * 2] 처럼 스프레드 연산자를 쓰는 방식은 매번 새로운 배열을 복사하기 때문에 성능이 매우 떨어져요 (O(n2)이 될 수 있음!).
// 만약 reduce를 쓴다면 a.push(b * 2); return a; 처럼 기존 누적값 배열(accumulator)을 직접 수정하는 게 좋습니다.
function solution(numbers) {
  // return numbers.reduce((a, b) => [...a, b * 2], []);
  return numbers.reduce((a, b) => {
    a.push(b * 2);
    return a;
  }, []);
}
console.log(solution([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); // [2, 4, 200, -198, 2, 4, 6]
