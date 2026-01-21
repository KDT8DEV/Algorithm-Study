function solution(num) {
    // 1인 경우 바로 0 반환
    if (num === 1) return 0;

    let count = 0;

    while (num !== 1 && count < 500) {
        if (num % 2 === 0) {
            num = num / 2;   // 짝수일 때
        } else {
            num = num * 3 + 1; // 홀수일 때
        }
        count++;
    }

    // 500번 안에 1이 되면 count 반환, 아니면 -1
    return num === 1 ? count : -1;
}
