function solution(s) {
    const isValid = (str) => {
        const stack = [];
        const pair = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let c of str) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                //닫는 괄호가 나오면 스택에서 꺼내서 확인
                if (stack.length === 0 || stack.pop() !== pair[c]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) count++;
    }
    return count;
}

console.log(solution("[](){}"));  // 3
