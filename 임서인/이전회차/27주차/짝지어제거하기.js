function solution(s) {
  const stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop(); // 같은 문자 짝 → 제거
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// 풀이 (스택 활용)
// 문자를 하나씩 순회하면서:
//   - 스택 top과 같은 문자면 → pop (짝 제거)
//   - 다르면 → push
// 끝까지 순회 후 스택이 비어있으면 1, 아니면 0

// 왜 스택?
// 짝 제거 후 앞뒤가 붙는 구조 = 가장 최근에 추가된 문자와 비교해야 하기 때문
// "baabaa" → b / a 스택: [b,a] / a top == a → pop → [b] / b top == b → pop → [] / a → [a] / a → pop → [] → 1

// 테스트
// console.log(solution('baabaa')); // 1
// console.log(solution('cdcd')); // 0
