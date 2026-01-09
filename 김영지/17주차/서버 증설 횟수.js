/**문제 설명
당신은 온라인 게임을 운영하고 있습니다. 
같은 시간대에 게임을 이용하는 사람이 m명 늘어날 때마다 서버 1대가 추가로 필요합니다. 
어느 시간대의 이용자가 m명 미만이라면, 서버 증설이 필요하지 않습니다. 
어느 시간대의 이용자가 n x m명 이상 (n + 1) x m명 미만이라면 최소 n대의 증설된 서버가 운영 중이어야 합니다. 
한 번 증설한 서버는 k시간 동안 운영하고 그 이후에는 반납합니다. 
예를 들어, k = 5 일 때 10시에 증설한 서버는 10 ~ 15시에만 운영됩니다.
하루 동안 모든 게임 이용자가 게임을 하기 위해 서버를 최소 몇 번 증설해야 하는지 알고 싶습니다. 
같은 시간대에 서버를 x대 증설했다면 해당 시간대의 증설 횟수는 x회입니다.

0시에서 23시까지의 시간대별 게임 이용자의 수를 나타내는 1차원 정수 배열 players, 
서버 한 대로 감당할 수 있는 최대 이용자의 수를 나타내는 정수 m, 
서버 한 대가 운영 가능한 시간을 나타내는 정수 k가 주어집니다. 
이때, 모든 게임 이용자를 감당하기 위한 최소 서버 증설 횟수를 return 하도록 solution을 완성해 주세요.
 */

/**나의 풀이 */
// 0~23시 시간을 반복문으로 돌려서 필요한 서버와 반납될 서버 수 구하기
// 운영 중인 서버 수에서 계산
function solution(players, m, k) {
    let answer = 0;

    // 현재 운영 중인 서버 수
    let running = 0;

    // 각 시간대에 반납될 서버 수
    let expire = Array(24 + k).fill(0);

    // 시간 반복문
    for (let time = 0; time < 24; time++) {
        // 현재 시간에 반납되는 서버 처리
        running = running - expire[time];

        // 현재 시간에 필요한 서버 수 계산
        let need = Math.floor(players[time] / m);


        // 서버가 부족하면 필요한 만큼만 증설
        if (running < need){
            let add = need - running;
            answer = answer + add;
            running = running + add;

            // k시간 뒤에 반납 예약
            expire[time + k] = expire[time + k] + add;
        }
    }
    return answer;
}

//======================================================================//

// let players = [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5];
// let m =	3;
// let k =	5;  //	7
// let sum = 0;    // 증설된 서버의 수
// let cnt = 0;    // 증설 횟수

// players.forEach((val, idx) => {
//     if(val >= m){
//         cnt++;
//         sum += Math.floor(val/m);
//     }
// })


// let answer = 0

// // 현재 운영 중인 서버 수
// let running = 0

// // 각 시간대에 반납될 서버 수 (0 ~ 23 + k 까지 고려)
// let expire = Array(24 + k).fill(0);

// let need = 0;
// let add = 0;

// for (let time = 0; time < 24; time++) {
//     running = running - expire[time];

//     let need = Math.floor(players[time] / m);

//     if (running < need){
//         add = need - running;
//         answer = answer + add;
//         running = running + add;

//         expire[time + k] = expire[time + k] + add;
//     }
// }
// return answer;
