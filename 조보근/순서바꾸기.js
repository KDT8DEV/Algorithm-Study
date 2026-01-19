/* 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요. */

function solution(num_list, n) {
  var answer = [];
  let add = [];

  for (let i = n; i < num_list.length; i++) {
    add.push(num_list[i]);
    num_list.splice(i, 1);
    i--;
  }
  answer = add.concat(num_list);
  return answer;
}
