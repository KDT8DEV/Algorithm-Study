function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      if (word.length === 0) return ""; // 빈 문자열 처리
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}


console.log(solution("3people unFollowed me"));
