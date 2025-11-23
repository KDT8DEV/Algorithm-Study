function solution(expression) {
  
  const tokens = expression.match(/\d+|[\+\-\*]/g);
 
  const operators = [...new Set(tokens.filter(t => "+-*".includes(t)))];
 
  const getPermutations = (arr) => {
    if (arr.length === 1) return [arr];
    const result = [];
    arr.forEach((val, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const perms = getPermutations(rest);
      perms.forEach(p => result.push([val, ...p]));
    });
    return result;
  };

  const opOrders = getPermutations(operators);

  // 수식 계산 함수
  const calc = (tokens, opOrder) => {
    let temp = [...tokens];
    for (const op of opOrder) {
      const stack = [];
      while (temp.length) {
        const token = temp.shift();
        if (token === op) {
          const prev = stack.pop();
          const next = temp.shift();
          const result = eval(`${prev}${op}${next}`);
          stack.push(result.toString());
        } else {
          stack.push(token);
        }
      }
      temp = stack;
    }
    return Math.abs(Number(temp[0]));
  };

  // 최대값 계산
  return Math.max(...opOrders.map(order => calc(tokens, order)));
}

console.log(solution("100-200*300-500+20"));
 