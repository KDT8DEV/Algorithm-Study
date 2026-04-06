function solution(a, b, g, s, w, t) {
    function canBuild(time) {
        let gold = 0n, silver = 0n, total = 0n;
        for (let i = 0; i < g.length; i++) {
            const trips = BigInt(Math.floor(time / (2n * BigInt(t[i]))));
            let extra = 0n;
            if (BigInt(time) % (2n * BigInt(t[i])) >= BigInt(t[i])) {
                extra = 1n;
            }
            const maxTransport = (trips + extra) * BigInt(w[i]);

            gold += BigInt(Math.min(g[i], Number(maxTransport)));
            silver += BigInt(Math.min(s[i], Number(maxTransport)));
            total += BigInt(Math.min(g[i] + s[i], Number(maxTransport)));
        }
        return gold >= BigInt(a) && silver >= BigInt(b) && total >= BigInt(a + b);
    }

    let left = 0n;
    let right = 400000000000000n;
    let answer = right;

    while (left <= right) {
        const mid = (left + right) / 2n;
        if (canBuild(mid)) {
            answer = mid;
            right = mid - 1n;
        } else {
            left = mid + 1n;
        }
    }
    return Number(answer);
}
