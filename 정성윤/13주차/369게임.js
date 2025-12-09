function solution(order) {
    let answer = 0;
    const str = String(order);

    for (const num of str) {
        if (num === '3' || num === '6' || num === '9') {
            answer++;
        }
    }

    return answer;
}
