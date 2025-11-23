function solution(s) {
  const answer = [0, 0];

  while (s !== "1") {
    const zeroCount = (s.match(/0/g) || []).length;
    answer[1] += zeroCount;

    s = s.replace(/0/g, ""); // 0 제거
    s = s.length.toString(2); // 이진수로 변환
    answer[0]++; // 변환 횟수 증가
  }

  return answer;
}
 
console.log(solution("110010101001"));
a=2;
a.toString()
