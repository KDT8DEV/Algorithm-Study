function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (const item of ingredient) {
    stack.push(item);

    // 마지막 4개가 [1,2,3,1]인지 확인
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 햄버거 포장 → 4개 제거
      stack.splice(stack.length - 4, 4);
      count++;
    }
  }

  return count;
}