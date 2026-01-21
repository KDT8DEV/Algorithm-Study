function solution(array, commands) {
    let result = [];

    for (let [i, j, k] of commands) {
        // i번째부터 j번째까지 자르기 (slice는 0-index 기반이므로 i-1)
        let sliced = array.slice(i - 1, j);
        // 정렬
        sliced.sort((a, b) => a - b);
        // k번째 값 추출
        result.push(sliced[k - 1]);
    }

    return result;
}
