//bandage는 [시전 시간, 초당 회복량, 추가 회복량]
function solution(bandage, health, attacks) {
    var answer = 0;
    let time = 1;
    let health_max = health;
    let attack_cnt = attacks.length;
    let bandage_multiple = 0;
    while (health > 0 && attack_cnt > 0) {
        let attack_time;
        let attack_dmg;
        attacks.forEach(el => {
            if (el[0] === time) {
                attack_time = el[0]
                attack_dmg = el[1];
            }
        });
        if (attack_time && attack_time == time) {
            health -= attack_dmg;
            console.log("맞음\
                ");
            bandage_multiple = 0;
            attack_cnt--;
        }
        else {
            if (health < health_max) {
                console.log(bandage_multiple == bandage[0]);
                health = Math.min(health_max, health + bandage[1]);
                bandage_multiple++;
                if (bandage_multiple == bandage[0]) {
                    health = Math.min(health_max, health + bandage[2]);
                    bandage_multiple = 0;
                    console.log("연속치료");
                }
            }
        }
        console.log(time, health, bandage_multiple);
        time++;
    }
    return health > 0 ? health : -1;
}


// console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]));

console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]));
