function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      return str_list.slice(0, i); // i 이전까지 (왼쪽)
    } else if (str_list[i] === "r") {
      return str_list.slice(i + 1); // i 이후부터 (오른쪽)
    }
  }
  return [];
}
