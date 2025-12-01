function solution(my_string) {
  return my_string
    .split('')
    .filter((e) => !isNaN(e))
    .map((e) => Number(e))
    .sort();
}
// 문제풀이
// my_string 에서 숫자만 추출
// filter 로 숫자인 것만 걸러내기
// 걸러낸 문자들을 Number 로 변환
// 오름차순 정렬 후 리턴
