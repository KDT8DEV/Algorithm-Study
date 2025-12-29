/**문제 설명
프로그래머스 사이트를 운영하는 그렙에서는 재택근무와 함께 출근 희망 시각을 자유롭게 정하는 유연근무제를 시행하고 있습니다. 
제도 정착을 위해 오늘부터 일주일 동안 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게 상품을 주는 이벤트를 진행하려고 합니다.
직원들은 일주일동안 자신이 설정한 출근 희망 시각 + 10분까지 어플로 출근해야 합니다. 
예를 들어 출근 희망 시각이 9시 58분인 직원은 10시 8분까지 출근해야 합니다. 
단, 토요일, 일요일의 출근 시각은 이벤트에 영향을 끼치지 않습니다. 
직원들은 매일 한 번씩만 어플로 출근하고, 모든 시각은 시에 100을 곱하고 분을 더한 정수로 표현됩니다. 
예를 들어 10시 13분은 1013이 되고 9시 58분은 958이 됩니다.
당신은 직원들이 설정한 출근 희망 시각과 실제로 출근한 기록을 바탕으로 상품을 받을 직원이 몇 명인지 알고 싶습니다.
직원 n명이 설정한 출근 희망 시각을 담은 1차원 정수 배열 schedules, 
직원들이 일주일 동안 출근한 시각을 담은 2차원 정수 배열 timelogs, 
이벤트를 시작한 요일을 의미하는 정수 startday가 매개변수로 주어집니다. 
이때 상품을 받을 직원의 수를 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// “시간 문제는 무조건 분 단위로 통일한다”
// 각 직원마다 허용시간 구하기 + 10 (분으로 변환)
// startday로 주말 인덱스 구하기 ((startday+i)%7가 6 or 0)
// 주말 인덱스 뺀 timelogs[i]가 허용시간[i] 안 넘는지 비교 통과 시 cnt++
// cnt값 리턴
function solution(schedules, timelogs, startday) {
    let cnt = 0;
    const timeToMinutes = (time) => {
        return Math.floor(time/100)*60 + time%100;
    }

    // 허용시간 계산
    const approveTime = schedules.map(s => timeToMinutes(s)+10);

    // 주말 인덱스
    // (startday + i)%7 이 6이거나, 0일 때 주말
    for(let i = 0; i < timelogs.length; i++){
        let isOk = true;
        for(let j = 0; j < timelogs[i].length; j++){
            // 주말 인덱스는 검사 안함
            if((startday + j)%7 === 6 || (startday + j)%7 === 0) continue;
            // 허용시간 비교
            if(timeToMinutes(timelogs[i][j]) > approveTime[i]){
                isOk = false;
                break;
            }
        }
        if(isOk) cnt++;

    }
    return cnt;
}
//========================================================//
// let schedules = [700, 800, 1100];
// let timelogs = [[710, 2359, 1050, 700, 650, 631, 659], 
//                 [800, 801, 805, 800, 759, 810, 809], 
//                 [1105, 1001, 1002, 600, 1059, 1001, 1100]];
// let startday = 5;	
// result : 3

// let schedules = [730, 855, 700, 720];
// let timelogs = [[710, 700, 650, 735, 700, 931, 912], 
//                 [908, 901, 805, 815, 800, 831, 835], 
//                 [705, 701, 702, 705, 710, 710, 711], 
//                 [707, 731, 859, 913, 934, 931, 905]];
// let startday = 1;	
// result : 2

// 각 직원마다 허용시간 구하기 + 10 (이때, 60이 넘으면 올림. / % 이용)
// startday로 주말 인덱스 구하기 (6, 7) 
// => startday 5일 때, 1, 2  
// => startday 1일 때, 5, 6  
// => startday 2일 때, 4, 5 
// 주말 인덱스 뺀 timelogs[i]가 허용시간[i] 안 넘는지 비교 통과 시 cnt++
// cnt값 리턴

// ===============================두번째 시도==================================//
// 허용시간을 분단위로 바꿔 비교 용이하도록
// 주말인덱스 계산.startday가 7인 경우 weekend 인덱스가 음수일 경우 발생
// 새 배열 만들 필요 없이 주말만 continue함

// 시간 분으로 변환 함수
// const timeToMinutes = (time) => {
//     return Math.floor(time/100)*60 + time%100;
// }

// let cnt = 0;
// // 허용시간 계산
// const approveTime = schedules.map(s => timeToMinutes(s)+10);

// console.log(approveTime);



// 주말 인덱스
// startday로 주말 인덱스 구하기 (6, 7) 
// => startday 5일 때, 1, 2  
// => startday 1일 때, 5, 6  
// => startday 2일 때, 4, 5 
// (startday + i)%7 이 6이거나, 0일 때 주말
// for(let i = 0; i < timelogs.length; i++){
//     let isOk = true;
//     for(let j = 0; j < timelogs[i].length; j++){
//         // 주말 인덱스는 검사 안함
//         if((startday + j)%7 === 6 || (startday + j)%7 === 0) continue;
//         // 허용시간 비교
//         if(timeToMinutes(timelogs[i][j]) > approveTime[i]){
//             isOk = false;
//             break;
//         }
//     }
//     if(isOk) cnt++;

// }
// console.log(cnt);

//===============================첫번째 시도======================================//
// let cnt = 0;
// let approveTime = [];
// let schArr = schedules.map(s => s+10);
// console.log(schArr);
// schArr.forEach(s => {
//     let a = Math.floor(s/100);
//     let b = String((s-(a*100))%60).padStart(2, 0);
//     let k = Math.floor((s-(a*100))/60);
//     if(k === 1){
//         a++;
//     }
//     approveTime.push(Number(`${a}${b}`));
// })
// console.log(approveTime);

// // 주말 인덱스
// let weekend = [6 - startday, 7 - startday];
// // 주말 인덱스 뺀 newTimelogs 정의
// let newTimelogs = [];
// for(let i = 0; i < timelogs.length; i++){
//     const tLogs = timelogs[i].filter((t, idx) => {
//         if(idx !== weekend[0] && idx !== weekend[1]){
//             return true;
//         }
//     })
//     newTimelogs.push(tLogs);

// }
// console.log(newTimelogs);

// // 허용시간 비교
// for(let i = 0; i < newTimelogs.length; i++){
//     for(let j = 0; j < newTimelogs[i].length; j++){
//         if(newTimelogs[i][j] > approveTime[i]){
//             break;
//         }
//         if(j === newTimelogs[i].length-1){
//             cnt++;
//         }
        
//     }
// }

// console.log(cnt);

