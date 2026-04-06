function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        // i가 완전제곱수인지 판별
        const sqrt = Math.sqrt(i);
        if (Number.isInteger(sqrt)) {
            answer -= i; // 약수 개수 홀수 → 뺀다
        } else {
            answer += i; // 약수 개수 짝수 → 더한다
        }
    }
    return answer;
}
