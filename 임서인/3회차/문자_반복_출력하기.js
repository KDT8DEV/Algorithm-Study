// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

solution = (string, n, answer = '') => {
  for (word of string) {
    answer = answer + word.repeat(n);
  }
  return answer;
};

console.log(solution('hello', 3));

// 배열로 쓰려면 이것도 좋은 것 같음
//var answer = [...my_string].map(v => v.repeat(n)).join("");
