function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

/*
function solution(my_string, is_prefix) {
  let sliced = my_string.slice(0, is_prefix.length);
  return sliced === is_prefix ? 1 : 0;
}
*/

// 함수설명
// startsWith 메서드는 문자열이 특정 문자로 시작하는지를 판단하여 true 또는 false를 반환합니다.