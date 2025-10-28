// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// lv01
const solution = (arr, div, ans = []) => {
  arr.sort((a, b) => a - b);
  ans = arr.filter((e) => e % div == 0);
  return ans.length == 0 ? [-1] : ans;
};
// 헐랭 ㅋㅋ 그냥 sort하면 문자열로 인식해서 ,,,,
// 1 100 5 65 이런식으로 됨,,,
