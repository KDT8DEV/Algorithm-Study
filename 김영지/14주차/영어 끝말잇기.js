/**문제 설명
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
이전에 등장했던 단어는 사용할 수 없습니다.
한 글자인 단어는 인정되지 않습니다.
다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
(계속 진행)
끝말잇기를 계속 진행해 나가다 보면, 
3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 
가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// indexOf로 중복 검사
// slice로 끝말잇기 검사
function solution(n, words) {
    let failNum = 0;
    let order = 0;
    let findIdx = -1;

    let dupWord = "";
    // 중복 단어 말했을 때
    for(let i =0; i<words.length; i++){
        if(words.indexOf(words[i]) !== i){
            dupWord = words[i];
            findIdx = i;
            break;
        }
    }

    if(findIdx !== -1){
        failNum = findIdx%n + 1;
        order = Math.floor(findIdx/n)+1;
        return [failNum, order];
    }
    
    for(let i = 0; i<words.length-1; i++){
        // 끝말잇기 틀렸을 때
        let w = words[i].slice(-1);
        let k = words[i+1].slice(0,1);
        if(w !== k){
            findIdx = i+1;
            failNum = findIdx%n + 1;
            order = Math.floor(findIdx/n)+1;
            return [failNum, order];
        }
    }

    return [0, 0];
}

/**효율적인 풀이 */
// set 자료구조 이용
// prev 선언해서 prev와 현재값 비교
function solution(n, words) {
    const used = new Set();   // 이미 말한 단어 저장

    used.add(words[0]);       // 첫 단어는 미리 추가

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const cur  = words[i];

        // 끝말잇기 규칙 위반
        if (prev[prev.length - 1] !== cur[0]) {
            const player = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [player, turn];
        }

        // 중복 단어 위반
        if (used.has(cur)) {
            const player = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [player, turn];
        }

        used.add(cur); // 사용 처리
    }

    return [0, 0];
}

//===================연습장=====================//
// 중복단어 말했을 때보다 끌맛잇기 틀렸을 때는 먼저 작성함. 에러
// order 구할 때 ceil로 했는데 floor 후 +1이 정확함. 중복단어 말했을 때 findIdx가 i 들어가므로.
// let n = 3;
// let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]; // [3, 3]
// // let n = 5;
// // let words = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]; 
// // [0, 0]
// // let n = 2;
// // let words =	["hello", "one", "even", "never", "now", "world", "draw"]; //	[1,3]
// let failNum = 0;
// let order = 0;
// let findIdx = -1;

// let dupWord = "";
// // 중복 단어 말했을 때
// for(let i =0; i<words.length; i++){
//     if(words.indexOf(words[i]) !== i){
//         dupWord = words[i];
//         findIdx = i;
//         break;
//     }
// }

// if(findIdx !== -1){
//     failNum = findIdx%n + 1;
//     order = Math.floor(findIdx/n) +1;
//     return [failNum, order];
// }

// for(let i = 0; i<words.length-1; i++){
//     // 끝말잇기 틀렸을 때
//     let w = words[i].slice(-1);
//     let k = words[i+1].slice(0,1);
//     if(w !== k){
//         findIdx = i+1;
//         failNum = findIdx%n + 1;
//         order = Math.floor(findIdx/n)+1;
//         return [failNum, order];
//     }
// }



// return [0, 0];