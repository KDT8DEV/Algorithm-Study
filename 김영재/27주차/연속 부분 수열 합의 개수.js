function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); // 원형을 직선으로 확장
    const sums = new Set();

    // 부분 수열 길이 1 ~ n까지
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let k = 0; k < length; k++) {
                sum += extended[start + k];
            }
            sums.add(sum);
        }
    }

    return sums.size;
}
