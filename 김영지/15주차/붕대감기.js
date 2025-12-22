/**문제 설명
어떤 게임에는 붕대 감기라는 기술이 있습니다.
붕대 감기는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다. 
t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다. 
게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.
기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다. 
몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.
몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다. 
이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.
당신은 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 
캐릭터가 끝까지 생존할 수 있는지 궁금합니다.
붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 
최대 체력을 의미하는 정수 health, 
몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다. 
모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요. 
만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.
 */

/**나의 풀이 */
// 첫번째 시도 : 모든 공격 배열 반복문에 모든 시간(초)를 반복문으로 돌려 이중 for문 돌렸다. 
// 포인터가 효율적
// [포인터 감지 공식]
// 데이터가 정렬돼 있나?
// 현재 시점이 계속 앞으로만 가나?
// 이미 처리한 건 다시 볼 필요 없나?
function solution(bandage, health, attacks) {
    let cnt = 0;    // 회복 성공 횟수
    let maxHealth = health; // 최대 체력
    let curHealth = health; // 현재 체력
    let attackIdx = 0;      // 포인터
    let lastSec = attacks[attacks.length - 1][0];   // 마지막 공격 시간
    
    // 매 초마다 health 상태변화
    for(let sec = 1; sec <= lastSec; sec++){
        // 공격
        if(attackIdx < attacks.length && sec === attacks[attackIdx][0]){
            curHealth -= attacks[attackIdx][1];
            attackIdx++;
            cnt = 0;

        }
        // 회복
        else {
            curHealth += bandage[1];
            cnt++;

            // 추가 회복
            if(cnt === bandage[0]){
                curHealth += bandage[2];
                cnt = 0;
            }
        }

        if(curHealth <= 0){
            return -1;
        }

        if(curHealth > maxHealth){
            curHealth = maxHealth;
        }
    }

    return curHealth;
}

//==============================연습장=====================================//
// let bandage = [5, 1, 5]	;
// let health = 30;
// let attacks = [[2, 10], [9, 15], [10, 5], [11, 5]];	// 5
// let cnt = 0;
// let maxHealth = health;
// let curHealth = health;
// let attackIdx = 0;
// let initSec = attacks[0][0];
// let lastSec = attacks[attacks.length - 1][0];

// for(let sec = 1; sec <= lastSec; sec++){
//     // 공격
//     if(attackIdx < attacks.length && sec === attacks[attackIdx][0]){
//         curHealth -= attacks[attackIdx][1];
//         attackIdx++;
//         cnt = 0;

//     }
//     // 회복
//     else {
//         curHealth += bandage[1];
//         cnt++;

//         // 추가 회복
//         if(cnt === bandage[0]){
//             curHealth += bandage[2];
//             cnt = 0;
//         }
//     }

//     if(curHealth <= 0){
//         return -1;
//     }

//     if(curHealth > maxHealth){
//         curHealth = maxHealth;
//     }
// }

// console.log(curHealth);





// for(let i = 0; i < attacks.length; i++){
//     for(let j = initSec; j <= lastSec; j++){
//         if(j === attacks[i][0]){
//             newHealth -= attacks[i][1];
//             cnt = 0;
//         }else{
//             cnt++;
//             newHealth += bandage[1];
//         }
//         if(newHealth <= 0){
//             return -1;
//         }
//         if(cnt === bandage[0]){
//             newHealth += bandage[2];
//             cnt = 0;
//         }
//         if(newHealth > health){
//             newHealth = health;
//         }        
//     }
// }

// console.log(newHealth);

