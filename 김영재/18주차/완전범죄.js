function solution(info, n, m) {
    const items = info.length;
    // dp[i][a][b] = true/false (i번째까지 고려했을 때 a, b 흔적이 가능한지)
    let dp = Array.from({ length: items + 1 }, () =>
        Array.from({ length: n }, () =>
            Array(m).fill(false)
        )
    );

    dp[0][0][0] = true; // 시작 상태

    for (let i = 0; i < items; i++) {
        const aTrace = info[i][0];
        const bTrace = info[i][1];

        for (let a = 0; a < n; a++) {
            for (let b = 0; b < m; b++) {
                if (!dp[i][a][b]) continue;

                // A가 훔치는 경우
                if (a + aTrace < n) {
                    dp[i + 1][a + aTrace][b] = true;
                }

                // B가 훔치는 경우
                if (b + bTrace < m) {
                    dp[i + 1][a][b + bTrace] = true;
                }
            }
        }
    }

    // 결과 탐색: 마지막 단계에서 가능한 최소 A 흔적
    let answer = -1;
    for (let a = 0; a < n; a++) {
        for (let b = 0; b < m; b++) {
            if (dp[items][a][b]) {
                if (answer === -1 || a < answer) {
                    answer = a;
                }
            }
        }
    }

    return answer;
}