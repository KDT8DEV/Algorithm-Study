function solution(num_list) {
  let result = -1;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      result = i;
      break;
    }
  }
  return result;
}
// num_list에서 처음으로 음수가 나오는 인덱스를 반환하는 함수
// 음수가 없으면 -1을 반환
// 음수가 나오면 그 즉시 반복문을 종료하도록 구현되어 있음

const solution = (num_list) => num_list.findIndex((v) => v < 0);
