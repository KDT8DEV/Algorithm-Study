function solution(answers) {
    // 수포자들의 찍는 패턴
    const patterns = [
        [1, 2, 3, 4, 5],                // 1번
        [2, 1, 2, 3, 2, 4, 2, 5],       // 2번
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]  // 3번
    ];

    // 각 수포자의 점수 계산
    const scores = patterns.map(pattern =>
        answers.filter((answer, idx) => answer === pattern[idx % pattern.length]).length
    );

    // 최고 점수 찾기
    const maxScore = Math.max(...scores);

    // 최고 점수를 받은 사람들 반환
    const result = [];
    scores.forEach((score, idx) => {
        if (score === maxScore) result.push(idx + 1);
    });

    return result;
}
