function solution(my_string) {
  let sum = 0;

  for (let char of my_string) {
    if (!isNaN(char)) {
      sum += Number(char);
    }
  }

  return sum;
}
// char가 isNaN(char)를 이용해 숫자인지 판별하고
// 숫자라면 sum에 더해 최종 합을 반환하는 함수
