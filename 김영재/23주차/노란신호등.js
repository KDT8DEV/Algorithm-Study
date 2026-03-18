function solution(signals) {
    // signals[i] = [green, yellow, red]
    const n = signals.length;

    // 각 신호등의 전체 주기 길이
    const cycles = signals.map(([g, y, r]) => g + y + r);

    // 모든 신호등의 주기 최소공배수(LCM)를 구해서 탐색 범위 제한
    const lcm = (a, b) => {
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        return (a * b) / gcd(a, b);
    };
    const maxTime = cycles.reduce((acc, cur) => lcm(acc, cur), 1);

    // 1초부터 maxTime까지 시뮬레이션
    for (let t = 1; t <= maxTime; t++) {
        let allYellow = true;

        for (let i = 0; i < n; i++) {
            const [g, y, r] = signals[i];
            const cycle = cycles[i];
            const pos = (t - 1) % cycle; // 현재 신호등의 위치

            if (pos < g) { // 초록불
                allYellow = false;
                break;
            } else if (pos < g + y) { // 노란불
                continue;
            } else { // 빨간불
                allYellow = false;
                break;
            }
        }

        if (allYellow) return t;
    }

    return -1; // 끝까지 없으면 -1
}

// 사용 예시
console.log(solution([[2,1,2],[5,1,1]])); // 13