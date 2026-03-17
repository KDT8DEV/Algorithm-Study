function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        // 교환해서 얻는 콜라 병 수
        const newCoke = Math.floor(n / a) * b;
        answer += newCoke;

        // 남은 빈 병 갱신
        n = (n % a) + newCoke;
    }

    return answer;
}
