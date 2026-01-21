function solution(id_list, report, k) {
    // 1. 중복 신고 제거
    const uniqueReports = [...new Set(report)];

    // 2. 신고당한 횟수 집계
    const reportedCount = {}; // key: 유저, value: 신고당한 횟수
    uniqueReports.forEach(r => {
        const [from, to] = r.split(" ");
        reportedCount[to] = (reportedCount[to] || 0) + 1;
    });

    // 3. 정지 대상자 목록
    const banned = new Set(
        Object.keys(reportedCount).filter(user => reportedCount[user] >= k)
    );

    // 4. 각 유저별 메일 횟수 계산
    const mailCount = {};
    id_list.forEach(id => (mailCount[id] = 0));

    uniqueReports.forEach(r => {
        const [from, to] = r.split(" ");
        if (banned.has(to)) {
            mailCount[from] += 1;
        }
    });

    // 5. 결과 배열 반환 (id_list 순서대로)
    return id_list.map(id => mailCount[id]);
}

// 테스트
console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
); // [2,1,1,0]