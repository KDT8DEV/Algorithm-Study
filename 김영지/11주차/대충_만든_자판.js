/**문제 설명
 * 휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 
 * 키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.
 * 예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 "A", 두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.
 * 같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 
 * 이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 
 * 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 
 * 또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다. 
 * 심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.
 * 이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.
 * 1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 
 * 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때, 
 * 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.
 * 단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.*/

/**제한사항
 * 1 ≤ keymap의 길이 ≤ 100
 * 1 ≤ keymap의 원소의 길이 ≤ 100
 * keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
 * 예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
 * keymap의 원소의 길이는 서로 다를 수 있습니다.
 * keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
 * 1 ≤ targets의 길이 ≤ 100
 * 1 ≤ targets의 원소의 길이 ≤ 100
 * targets의 원소는 알파벳 대문자로만 이루어져 있습니다. */

/**나의 풀이 */
// 각 문자를 keymap 전체에서 찾아 가장 빠르게 누를 수 있는 위치를 구하고,
// 그걸 모두 더해 targets의 각 문자열 입력 비용을 계산하는 방식.
// 어떤 문자라도 keymap에 없다면 그 단어는 -1 처리.
function solution(keymap, targets) {
    let arr = [];   // 각 문자별로 keymap에서 누르는 최소 횟수를 임시로 저장할 배열
    let sum = 0;    // 하나의 target(단어) 총 입력 횟수
    let answer = []; // 모든 target의 결과를 담는 배열
    
    // targets의 각 단어를 순회
    for (let k = 0; k < targets.length; k++) {

        // 단어의 각 문자를 순회
        for (let i = 0; i < targets[k].length; i++) {

            // keymap의 각 문자열(키 배열)을 순회하며 
            // 해당 문자가 어느 위치(idx)에 있는지 확인
            for (let j = 0; j < keymap.length; j++) {
                // keymap[j]를 한 글자씩 배열로 만들어서 찾음
                let idx = [...keymap[j]].findIndex(v => v === targets[k][i]);

                // 해당 키에 문자가 존재하면 arr에 index 저장
                // 여러 keymap 중 가장 빠른 위치를 찾기 위해 push만 하고 min에서 결정
                if (idx !== -1) {
                    arr.push(idx);
                }
            }

            // 만약 어떤 keymap에서도 해당 문자를 찾지 못하면
            // 이 target(단어)은 입력 불가이므로 바로 -1
            if (arr.length === 0) {
                sum = -1;
                break; // 더 이상 이 단어 검사할 필요 없음
            }

            // arr에 저장된 idx 중 가장 작은 값 + 1(키를 누르는 횟수는 index+1)
            let min = Math.min(...arr) + 1;
            sum += min;   // 누적 입력 횟수 증가

            arr = [];     // 다음 문자 검사 위해 초기화
        }

        // 하나의 target 단어 입력 결과 push
        answer.push(sum);

        // 다음 target 계산을 위해 sum 초기화
        sum = 0;
    }

    return answer;
}

/**더 효율적인 풀이 */
function solution(keymap, targets) {
    // ------------------------------------------
    // 1. keymap 전체를 돌며 각 문자의 최소 입력 횟수를 저장할 객체 생성
    //    예: { 'A': 1, 'B': 2, 'C': 1 ... }
    // ------------------------------------------
    const charMinPress = {};

    for (const keys of keymap) {
        // keys는 예: "ABACD"
        [...keys].forEach((char, index) => {
            const pressCount = index + 1; // index는 0부터 시작 → 실제 입력 횟수는 index+1

            // char가 이미 등록된 적 있다면 더 작은 값으로 갱신
            if (charMinPress[char] === undefined) {
                charMinPress[char] = pressCount;
            } else {
                charMinPress[char] = Math.min(charMinPress[char], pressCount);
            }
        });
    }

    // ------------------------------------------
    // 2. targets의 각 단어를 계산
    //    charMinPress에서 문자를 찾을 수 없다면 그 단어는 -1
    // ------------------------------------------
    const answer = [];

    for (const word of targets) {
        let totalPress = 0; // 단어 전체 입력 비용

        for (const char of word) {
            // keymap에 없는 문자라면 입력 불가 → 바로 -1 처리
            if (charMinPress[char] === undefined) {
                totalPress = -1;
                break;
            }

            // 해당 문자 입력 최소 횟수 더하기
            totalPress += charMinPress[char];
        }

        answer.push(totalPress);
    }

    return answer;
}


//===================연습장======================//
// let keymap = ["ABACD", "BCEFD"];
// let targets = ["ABCD", "AABB"];
// let arr = [];
// let sum = 0;
// let answer = [];

// // let idx = [...keymap[0]].findIndex(v => v === targets[0][0]);
// // let idx2 = [...keymap[1]].findIndex(v => v === targets[0][0]);
// // // console.log(Math.min(idx, idx2)+1);
// // let idx3 = [...keymap[0]].findIndex(v => v === targets[0][1]);
// // let idx4 = [...keymap[1]].findIndex(v => v === targets[0][1]);
// // Math.min(idx3, idx4);
// // // console.log(Math.min(idx3, idx4)+1);
// for(let k = 0; k < targets.length; k++){
//     for(let i = 0; i < targets[k].length; i++){
//         for(let j = 0; j < keymap.length; j++){
//             let idx = [...keymap[j]].findIndex(v => v === targets[k][i]);
//             if(idx !== -1){
//                 arr.push(idx); 
//             }        
//         }
//         if(arr.length === 0){
//             sum = -1
//             break;
//         }
//         let min =Math.min(...arr)+1;
//         sum += min;
//         arr = [];
//     }
//     answer.push(sum);
//     sum = 0;
// }

// console.log(answer);