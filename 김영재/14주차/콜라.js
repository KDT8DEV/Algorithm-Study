function solution(a, b, n) {
  let answer = 0;
  let empty = n;

  while (empty >= a) {
    // 교환 가능한 콜라 병 수
    const exchanged = Math.floor(empty / a) * b;
    answer += exchanged;

    // 교환 후 남은 빈 병 = 교환 후 남은 병 + 새로 마신 병
    empty = (empty % a) + exchanged;
  }

  return answer;
}