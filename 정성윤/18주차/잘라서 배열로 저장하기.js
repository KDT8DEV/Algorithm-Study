function solution(my_string, n) {
  const result = [];
  for (let i = 0; i < my_string.length; i += n) {
    result.push(my_string.slice(i, i + n));
  }
  return result;
}
