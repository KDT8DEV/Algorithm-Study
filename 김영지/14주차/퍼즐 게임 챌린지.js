/**문제 설명
당신은 순서대로 n개의 퍼즐을 제한 시간 내에 풀어야 하는 퍼즐 게임을 하고 있습니다. 
각 퍼즐은 난이도와 소요 시간이 정해져 있습니다. 당신의 숙련도에 따라 퍼즐을 풀 때 틀리는 횟수가 바뀌게 됩니다. 
현재 퍼즐의 난이도를 diff, 현재 퍼즐의 소요 시간을 time_cur, 이전 퍼즐의 소요 시간을 time_prev, 당신의 숙련도를 level이라 하면, 게임은 다음과 같이 진행됩니다.

diff ≤ level이면 퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용하여 해결합니다.
diff > level이면, 퍼즐을 총 diff - level번 틀립니다. 
퍼즐을 틀릴 때마다, time_cur만큼의 시간을 사용하며, 
추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 합니다. 
이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다. 
diff - level번 틀린 이후에 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용하여 퍼즐을 해결합니다.
예를 들어 diff = 3, time_cur = 2, time_prev = 4인 경우, level에 따라 퍼즐을 푸는데 걸리는 시간은 다음과 같습니다.

level = 1이면, 퍼즐을 3 - 1 = 2번 틀립니다. 
한 번 틀릴 때마다 2 + 4 = 6의 시간을 사용하고, 
다시 퍼즐을 푸는 데 2의 시간을 사용하므로 총 6 × 2 + 2 = 14의 시간을 사용하게 됩니다.
level = 2이면, 퍼즐을 3 - 2 = 1번 틀리므로, 6 + 2 = 8의 시간을 사용하게 됩니다.
level ≥ 3이면 퍼즐을 틀리지 않으며, 2의 시간을 사용하게 됩니다.
퍼즐 게임에는 전체 제한 시간 limit가 정해져 있습니다. 
제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 합니다. 
난이도, 소요 시간은 모두 양의 정수며, 숙련도도 양의 정수여야 합니다.

퍼즐의 난이도를 순서대로 담은 1차원 정수 배열 diffs, 
퍼즐의 소요 시간을 순서대로 담은 1차원 정수 배열 times, 
전체 제한 시간 limit이 매개변수로 주어집니다. 
제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 정수로 return 하도록 solution 함수를 완성해 주세요.
 */

/**나의 풀이 */
// Math.max(...) 안하고 반복문으로 최대값 찾아야함
function solution(diffs, times, limit) {
    // 안전하게 최대값 찾기 (스프레드 사용 금지)
    let maxDiff = 0;
    for (let x of diffs) {
        if (x > maxDiff) maxDiff = x;
    }

    let left = 1;
    let right = maxDiff;
    let answer = -1; // 불가능한 경우 -1 반환(문제에서 항상 가능하다고 했으니 이 값은 바뀔 수 있음)

    const canPass = (level) => {
        let takeTime = 0;

        for (let j = 0; j < diffs.length; j++) {
            if (level >= diffs[j]) {
                takeTime += times[j];
            } else {
                const noCnt = diffs[j] - level;
                const tPrev = j === 0 ? 0 : times[j - 1];
                const tCurr = times[j];
                takeTime += (tPrev + tCurr) * noCnt + tCurr;
            }

            if (takeTime > limit) return false; // 조기 종료: 이게 성능 핵심
        }

        return true;
    };

    // 이진탐색: 최소 level 탐색
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (canPass(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}
//============================연습장===================================//
//=============================세번째 시도================================//
// Math.max(...) 쓰면 안됨
// Math.max(...diffs) 처럼 스프레드 연산자(...)로 큰 배열을 Math.max에 전달하면 V8 엔진에서 인수 개수/스택 한계 때문에 
// 런타임 에러(RangeError / 호출 스택/인수 제한 초과)가 발생
function solution(diffs, times, limit){
    let left = 1;
    let right = Math.max(...diffs);
    let answer = right;

    // 통과 여부 체크 함수
    const canPass = (level) => {
        let takeTime = times[0];   // 소요시간
        for(let j = 1; j<diffs.length;j++){

            if(level>=diffs[j]){
                takeTime += times[j];
            }
            else{
                // 틀린횟수
                let noCnt = diffs[j] - level;
                takeTime += (times[j-1] + times[j])*noCnt + times[j];
            }

            if(limit < takeTime) return false;
        }
        
        return true;
    }

    // 이진탐색: 최소 level 탐색
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(canPass(mid)){
            answer = mid;
            right = mid -1;     // 더 작은 값이 가능한지 확인
        }else{
            left = mid + 1;
        }
    }

    return answer;

}

solution([1, 5, 3], [2, 4, 7], 30);




//====================두번째 시도=====================================//
// limit 값 초과하면 바로 for문 종료하도록 for문 안에 if문 추가

// function solution(diffs, times, limit){
//     let left = 1;
//     let right = Math.max(...diffs);
//     let answer = right;

//     // 통과 여부 체크 함수
//     const canPass = (level) => {
//         let takeTime = times[0];   // 소요시간
//         for(let j = 1; j<diffs.length;j++){
//             if(level>=diffs[j]){
//                 takeTime += times[j];
//             }
//             else{
//                 // 틀린횟수
//                 let noCnt = diffs[j] - level;
//                 takeTime += (times[j-1] + times[j])*noCnt + times[j];
//             }
//         }
//         if(limit < takeTime) return false;
//         else return true;
//     }

//     // 이진탐색: 최소 level 탐색
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         if(canPass(mid)){
//             answer = mid;
//             right = mid -1;     // 더 작은 값이 가능한지 확인
//         }else{
//             left = mid + 1;
//         }
//     }

//     return answer;

// }

// solution([1, 5, 3], [2, 4, 7], 30);

//=========================첫번쨰 시도============================//
// 런타임 에러 발생
// level이 줄면 시간은 커질 것이다 라는 가정이 틀렸다.
// 시간복잡도 증가
// let diffs = [1, 5, 3];
// let	times = [2, 4, 7];
// let	limit = 30;	        // 3
// let level = Math.max(...diffs);      // 숙련도

// let passLevel = [];

// for(let i = level; i>0;i--){
//     let takeTime = times[0];   // 소요시간
//     for(let j = 1; j<diffs.length;j++){
//         if(i>=diffs[j]){
//             takeTime += times[j];
//         }
//         else{
//             // 틀린횟수
//             let noCnt = diffs[j] - i;
//             takeTime += (times[j-1] + times[j])*noCnt + times[j]
//         }
//     }
//     if(takeTime <= limit){
//         passLevel.push(i);
//     }
// }
// if(passLevel.length === 0) return -1;

// let minLevel = Math.min(...passLevel);
// console.log(minLevel);
