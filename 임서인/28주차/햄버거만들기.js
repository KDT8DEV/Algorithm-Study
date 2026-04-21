function solution(ingredient) {
    const stack = [];
    const pattern = [1, 2, 3, 1];
    let count = 0;

    for (const item of ingredient) {
        stack.push(item);

        if (stack.length >= 4) {
            const top4 = stack.slice(-4);
            if (top4.every((val, i) => val === pattern[i])) {
                stack.splice(-4, 4);
                count++;
            }
        }
    }

    return count;
}


// 풀이
// 재료를 하나씩 push한 후, 스택 상단 4개가 햄버거 패턴 [1, 2, 3, 1]인지 확인한다.
// 패턴이 일치하면 상단 4개를 스택에서 제거하고 count를 1 증가시킨다.

