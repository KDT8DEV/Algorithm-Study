function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    //최대시간
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        for (let time of times) {
            count += Math.floor(mid / time);
        } //총 시간 / 심사관 별 소요 시간

        if (count >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}
