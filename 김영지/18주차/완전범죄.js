/**문제 설명
A도둑과 B도둑이 팀을 이루어 모든 물건을 훔치려고 합니다. 
단, 각 도둑이 물건을 훔칠 때 남기는 흔적이 누적되면 경찰에 붙잡히기 때문에, 두 도둑 중 누구도 경찰에 붙잡히지 않도록 흔적을 최소화해야 합니다.

물건을 훔칠 때 조건은 아래와 같습니다.

물건 i를 훔칠 때,
A도둑이 훔치면 info[i][0]개의 A에 대한 흔적을 남깁니다.
B도둑이 훔치면 info[i][1]개의 B에 대한 흔적을 남깁니다.
각 물건에 대해 A도둑과 B도둑이 남기는 흔적의 개수는 1 이상 3 이하입니다.
경찰에 붙잡히는 조건은 아래와 같습니다.

A도둑은 자신이 남긴 흔적의 누적 개수가 n개 이상이면 경찰에 붙잡힙니다.
B도둑은 자신이 남긴 흔적의 누적 개수가 m개 이상이면 경찰에 붙잡힙니다.
각 물건을 훔칠 때 생기는 흔적에 대한 정보를 담은 2차원 정수 배열 info, 
A도둑이 경찰에 붙잡히는 최소 흔적 개수를 나타내는 정수 n, 
B도둑이 경찰에 붙잡히는 최소 흔적 개수를 나타내는 정수 m이 매개변수로 주어집니다. 
두 도둑 모두 경찰에 붙잡히지 않도록 모든 물건을 훔쳤을 때, 
A도둑이 남긴 흔적의 누적 개수의 최솟값을 return 하도록 solution 함수를 완성해 주세요. 
만약 어떠한 방법으로도 두 도둑 모두 경찰에 붙잡히지 않게 할 수 없다면 -1을 return해 주세요. */

/**나의 풀이 */
// 동적계획법 : 순서, 누적, 최소, 제한된 범위
function solution(info, n, m) {
    let dp = Array(m).fill(-1);
    dp[0] = 0;  // b의 흔적이 0개일 때, a 흔적의 최솟값

    for(let [aCost, bCost] of info){
        let next = Array(m).fill(-1);

        for(let b = 0; b < m; b++){
            if(dp[b] === -1) continue;

            // A선택
            let na = dp[b]+aCost;
            if(na < n) {
                next[b] = next[b] === -1 ? na : Math.min(next[b], na);
            }

            // B선택
            let nb = b+bCost;
            if(nb < m) {
                next[nb] = next[nb] === -1 ? dp[b] : Math.min(next[nb], dp[b]);        
            }

        }

        dp = next;
    }

    let result = dp.filter(v => v !== -1);
    return result.length ? Math.min(...result) : -1
}

//=============================
// let info = [[1, 2], [2, 3], [2, 1]];
// let n = 4;
// let m = 4;  // 2


// // 첫번째 물건 A가 훔쳤을 때
// let na = 1;
// // na가 n을 넘는가?
// if(na < n) return true;
// // 두번째, 세번째 물건 B가 훔쳤을 때
// let nb = 3 + 1;
// // nb가 m을 넘는가?
// if(nb < m) return true;



// let dp = Array(m).fill(-1);
// dp[0] = 0;  // b의 흔적이 0개일 때, a 흔적의 최솟값

// for(let [aCost, bCost] of info){
//     let next = Array(m).fill(-1);

//     for(let b = 0; b < m; b++){
//         if(dp[b] === -1) continue;

//         // A선택
//         let na = dp[b]+aCost;
//         if(na < n) {
//             next[b] = next[b] === -1 ? na : Math.min(next[b], na);
//         }

//         // B선택
//         let nb = b+bCost;
//         if(nb < m) {
//             next[nb] = next[nb] === -1 ? dp[b] : Math.min(next[nb], dp[b]);        
//         }
    
//     }

//     dp = next;
// }

// let result = dp.filter(v => v !== -1);
// if(result.length){
//     console.log(Math.min(...result));
// }else{
//     console.log(-1);
// }



