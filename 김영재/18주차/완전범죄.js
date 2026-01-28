function solution(info, n, m) {
    const items = info.length;
    // dp[i][a][b] = true/false
    // i번째 아이템까지 고려했을 때,
    // A의 흔적이 a, B의 흔적이 b인 상태가 가능한지 여부
    let dp = Array.from({ length: items + 1 }, () =>
        Array.from({ length: n }, () =>
            Array(m).fill(false)
        )
    );

    dp[0][0][0] = true; // 시작 상태 (아무 것도 훔치지 않은 상태)

    for (let i = 0; i < items; i++) {
        const aTrace = info[i][0]; // i번째 아이템을 A가 훔쳤을 때 남는 흔적
        const bTrace = info[i][1]; // i번째 아이템을 B가 훔쳤을 때 남는 흔적

        for (let a = 0; a < n; a++) {
            for (let b = 0; b < m; b++) {
                if (!dp[i][a][b]) continue; // 불가능한 상태는 건너뜀

                // A가 i번째 아이템을 훔치는 경우
                if (a + aTrace < n) {
                    dp[i + 1][a + aTrace][b] = true;
                }

                // B가 i번째 아이템을 훔치는 경우
                if (b + bTrace < m) {
                    dp[i + 1][a][b + bTrace] = true;
                }
            }
        }
    }
    // dp
    // i = 4
    //     a = 3 b = 0 
    //     a= 2 b = 1
    //     a= 0 b= 3
    // ...

    // 마지막 단계에서 가능한 상태 중 최소 A 흔적을 찾음
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