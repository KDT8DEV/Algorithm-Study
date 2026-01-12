function solution(N, stages) {
    const result = [];
    const stageCount = new Array(N + 2).fill(0);

    // 각 스테이지에 멈춘 사람 수 카운트
    for (let s of stages) {
        stageCount[s] += 1;
    }

    let players = stages.length; // 전체 유저 수

    for (let i = 1; i <= N; i++) {
        if (players === 0) {
            result.push({ stage: i, fail: 0 });
        } else {
            const failRate = stageCount[i] / players;
            result.push({ stage: i, fail: failRate });
            players -= stageCount[i]; // 다음 스테이지 도달 인원 줄이기
        }
    }

    // 실패율 기준 내림차순, 같으면 스테이지 번호 오름차순
    result.sort((a, b) => {
        if (b.fail === a.fail) return a.stage - b.stage;
        return b.fail - a.fail;
    });

    return result.map(r => r.stage);
}