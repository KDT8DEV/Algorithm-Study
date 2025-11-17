/**문제 설명
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 
작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	60	50
2	30	70
3	60	30
4	80	40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 
지갑의 크기를 return 하도록 solution 함수를 완성해주세요. */

/*나의 풀이*/
function solution(sizes) {
    let wArr = [];
    let hArr = [];

    sizes.forEach((val) => {

        let [w, h] = val;

        if(w < h) {
            val[0] = h;
            val[1] = w;
        };

        [w, h] = val;

        wArr.push(w);
        hArr.push(h);
    });

    const maxW = Math.max(...wArr);
    const maxH = Math.max(...hArr);
    return maxW*maxH;
}

/**효율적인 풀이 */
// 1) 불필요한 배열 제거
// wArr, hArr 없이 바로 최댓값만 관리 → 메모리 절약.
// 2) 배열 재대입(val[0] = ...) 제거
// 원본 배열을 건드리지 않는 방식 → 코드 안정성 상승.
// 3) 구조분해 + Math.min/max 사용
// 읽기 쉬워짐.
// 4) forEach → for of
// 약간 더 빠르고(마이크로 최적화 수준) 가독성 좋음.
function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (let [w, h] of sizes) {
        const big = Math.max(w, h);
        const small = Math.min(w, h);

        if (big > maxW) maxW = big;
        if (small > maxH) maxH = small;
    }

    return maxW * maxH;
}

/**다른 사람 풀이 */
// map 사용
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}

/**다른 사람 풀이 */
// sort 정렬
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}

//====================================연습장====================================//
// 아이디어 
// 실패
// 1) 가장 큰 수 찾기. 
// 2) 큰 수의 행(혹은 열)보다 큰 행(혹은 열)이 있는지 찾기
// 3) 찾은 수의 페어가 가로 세로 돌리면 수용되는지 확인 
// 4) 수용 안되면 그 수 선택
// 성공
// 1) sizes의 요소에서 큰값, 작은값을 w, h 순으로 놓기 
// 2) w, h 각각 array에 넣어서 max값 비교 
// 3) 가로 세로 max값 곱하기

let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];	    // 4000
// let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];  //	120
// let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];  //	133

let wArr = [];
let hArr = [];

sizes.forEach((val) => {

    let [w, h] = val;

    if(w < h) {
        val[0] = h;
        val[1] = w;
    };

    [w, h] = val;

    wArr.push(w);
    hArr.push(h);
});

console.log(sizes);
const maxW = Math.max(...wArr);
const maxH = Math.max(...hArr);
console.log(maxW);
console.log(maxH);
// const maxIdx = wArr.indexOf(max) !== -1 ? wArr.indexOf(max) : hArr.indexOf(max);
// console.log(maxIdx);


// sizes.reduce((acc, curr, curIdx, array)=>{

// })
