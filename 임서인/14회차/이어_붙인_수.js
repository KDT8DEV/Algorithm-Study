function solution(num_list, odd = '', even = '') {
  num_list.forEach((e) => {
    e % 2 ? (odd += e) : (even += e);
  });
  return Number(odd) + Number(even);
}
// num_list의 요소들 중에서 홀수와 짝수를 각각 이어붙인 후
// 이어붙인 두 수의 합을 반환하는 함수
