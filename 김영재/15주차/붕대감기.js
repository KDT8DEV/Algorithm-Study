// bandage: [시전 시간, 초당 회복량, 추가 회복량]
// health: 초기 체력
// attacks: [공격 시간, 공격 데미지] 배열

function solution(bandage, health, attacks) {
    let time = 1;                  // 현재 시간을 1초부터 시작
    let health_max = health;       // 최대 체력 (초기 체력 기준)
    let attack_cnt = attacks.length; // 남은 공격 횟수
    let bandage_multiple = 0;      // 연속 회복 카운트 (시전 시간 체크용)

    // 체력이 남아있고 공격이 아직 남아있는 동안 반복
    while (health > 0 && attack_cnt > 0) {
        let attack_time;           // 이번 초에 공격이 발생하는 시간
        let attack_dmg;            // 이번 초에 들어오는 공격 데미지

        // 현재 시간에 공격이 있는지 확인
        attacks.forEach(el => {
            if (el[0] === time) {
                attack_time = el[0];
                attack_dmg = el[1];
            }
        });

        // 공격이 발생한 경우
        if (attack_time && attack_time == time) {
            health -= attack_dmg;          // 체력 감소
            console.log("맞음\n");         
            bandage_multiple = 0;          // 연속 회복 초기화
            attack_cnt--;                  // 남은 공격 횟수 감소
        }
        // 공격이 없는 경우 → 회복 처리
        else {
            if (health < health_max) {     // 체력이 최대치보다 낮을 때만 회복
                console.log(bandage_multiple == bandage[0]);
                health = Math.min(health_max, health + bandage[1]); // 초당 회복량 적용
                bandage_multiple++;        // 연속 회복 카운트 증가

                // 연속 회복 시간이 bandage[0]에 도달하면 추가 회복량 적용
                if (bandage_multiple == bandage[0]) {
                    health = Math.min(health_max, health + bandage[2]); // 추가 회복량 적용
                    bandage_multiple = 0;   // 카운트 초기화
                    console.log("연속치료"); 
                }
            }
        }

        // 현재 시간, 체력, 연속 회복 카운트 출력 (디버깅용)
        console.log(time, health, bandage_multiple);

        time++; // 시간 1초 증가
    }

    // 체력이 남아있으면 최종 체력 반환, 아니면 -1 반환
    return health > 0 ? health : -1;
}

// console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]));

console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]));
