function solution(schedules, timelogs, startday) {
    // schedules 배열의 각 시간을 '출근 허용 시간 + 10분'으로 변환
    schedules = schedules.map(el => {
        let date = new Date();              // Date 객체 생성
        date.setHours(el / 100);            // el은 HHMM 형식 → 시(hour) 설정
        date.setMinutes(el % 100 + 10);     // 분(minute)에 +10 → 지각 허용 범위
        // 다시 HHMM 형식으로 변환해서 반환
        return date.getHours() * 100 + date.getMinutes();
    });

    let cnt = 0; // 상품(prize) 받을 사람 수 카운트

    // timelogs: 각 사람의 7일간 출근 기록
    for (j = 0; j < timelogs.length; j++) {
        let prize = true; // 기본적으로 상품 받을 자격 있다고 가정

        // 7일 동안 검사
        for (i = 0; i < 7; i++) {
            // (i + startday) % 7 → 요일 계산
            // 6: 토요일, 0: 일요일 → 주말은 제외
            if (!((i + startday) % 7 == 6 || (i + startday) % 7 == 0)) {
                // 평일에 출근 시간이 허용 시간보다 늦으면 상품 자격 박탈
                if (timelogs[j][i] > schedules[j]) {
                    prize = false;
                }
            }
        }

        // 끝까지 조건을 만족하면 상품 카운트 증가
        if (prize) {
            cnt++;
        }
    }

    return cnt; // 최종 상품 받을 사람 수 반환
}

// 예시 실행
console.log(solution(
    [700, 800, 1100], // 각 사람의 출근 기준 시간 (HHMM)
    [
        [710, 2359, 1050, 700, 650, 631, 659], // 사람1의 7일 출근 기록
        [800, 801, 805, 800, 759, 810, 809],   // 사람2
        [1105, 1001, 1002, 600, 1059, 1001, 1100] // 사람3
    ],
    5 // 시작 요일 (예: 5 → 금요일)
));

// new Date(1000 * 60 * 420)
// 1000ms * 60초 * 420분 = 420분(7시간) 후의 시간 객체
console.log((new Date(1000 * 60 * 420)));