function solution(x) {
    const sum = String(x)
        .split('')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    return x % sum === 0;
}
