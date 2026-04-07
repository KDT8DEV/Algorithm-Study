function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    const result = [];

    let current = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= current) {
            // 현재 배포 기준일 안에 끝나는 작업 → 함께 배포
            count++;
        } else {
            // 새로운 배포 시작
            result.push(count);
            count = 1;
            current = days[i];
        }
    }
    result.push(count);

    return result;
}
