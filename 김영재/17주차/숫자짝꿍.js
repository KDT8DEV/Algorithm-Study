function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    // X, Y의 각 숫자 빈도 카운트
    for (let ch of X) {
        countX[ch]++;
    }
    for (let ch of Y) {
        countY[ch]++;
    }

    let result = "";

    // 9부터 0까지 내려가면서 공통 개수만큼 붙이기
    for (let d = 9; d >= 0; d--) {
        const common = Math.min(countX[d], countY[d]);
        if (common > 0) {
            result += String(d).repeat(common);
        }
    }

    // 예외 처리
    if (result === "") return "-1";
    if (/^0+$/.test(result)) return "0";
    return result;
}