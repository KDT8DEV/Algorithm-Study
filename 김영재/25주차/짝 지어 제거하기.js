function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 같은 글자면 제거
    } else {
      stack.push(char); // 아니면 추가
    }
  }

  return stack.length === 0 ? 1 : 0;
}


console.log(solution("baabaa"));  
console.log(solution("cdcd"));   