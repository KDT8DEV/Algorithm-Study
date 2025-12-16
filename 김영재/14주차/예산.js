function solution(d, budget) {
    // 1. 신청 금액 오름차순 정렬
    d.sort((a, b) => a - b);

    let count = 0;
    let sum = 0;

    // 2. 작은 금액부터 차례대로 지원
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum <= budget) {
            count++;
        } else {
            break;
        }
    }

    return count;
}