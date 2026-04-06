function solution(n, left, right) {
    const result = [];
    for (let k = left; k <= right; k++) {
        const row = Math.floor(k / n);
        const col = k % n;
        result.push(Math.max(row, col) + 1);
    }
    return result;
}
