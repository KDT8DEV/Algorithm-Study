function solution(schedules, timelogs, startday) {
    schedules=schedules.map(el => {
        let date = new Date();
        date.setHours(el / 100);
        date.setMinutes(el % 100 + 10);
        return date.getHours() * 100 + date.getMinutes();
    });
    let cnt = 0;
    for (j = 0; j < timelogs.length; j++) {
        let prize = true;

        for (i = 0; i < 7; i++) {
            if (!((i + startday) % 7 == 6 || (i + startday) % 7 == 0)) {
                if (timelogs[j][i] > schedules[j]) {
                    prize=false;
                }
            }
        }
        if(prize){
            cnt++;
        }
    }

    return cnt;
}
//날짜함수로 시,분 계산해주고 토,일일때는 제외하고 계산
console.log(solution([700, 800, 1100],
    [[710, 2359, 1050, 700, 650, 631, 659],
    [800, 801, 805, 800, 759, 810, 809],
    [1105, 1001, 1002, 600, 1059, 1001, 1100]],
    5)
);


console.log((new Date(1000 * 60 * 420)));
