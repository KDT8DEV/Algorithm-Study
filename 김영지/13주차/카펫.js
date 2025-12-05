/**문제 설명
 * Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 * Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
 * Leo가 본 카펫에서 갈색 격자의 수 brown, 
 * 노란색 격자의 수 yellow가 매개변수로 주어질 때 
 * 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

/**제한사항
 * 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 * 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다. */

/**나의 풀이 */
// 사각형 넓이 : brown + yellow
// [가로, 세로] 약수 쌍 배열
// filter 함수로 가로길이가 더 긴 약수쌍 배열 구하기
// (가로-2) * (세로-2) = yellow인 값이 정답
function solution(brown, yellow) {
    let width;
    let height;
    let wh = [];

    // 사각형 넓이
    let square = brown + yellow;
    // 가로 세로 값 : 약수 찾기
    for(let i =1;i<=square;i++){
        if(square%i===0){
            width = i;
            height = square/i;
            wh.push([width, height]);
        }
    }

    const newWh = wh.filter(([w,h]) => (w >=h));

    for(let val of newWh){
        let w = val[0];
        let h = val[1];

        if((w-2)*(h-2) === yellow){
            return [w, h];
        }
    }

}

//================연습장=====================//
// let brown = 10;	
// let yellow = 2;	// [4, 3]
// let brown = 8;
// let yellow = 1; //	[3, 3]
// let brown = 24;
// let yellow = 24;    //	[8, 6]

// let width;
// let height;
// let wh = [];
// let answer = [];

// // 사각형 넓이
// let square = brown + yellow;
// // 가로 세로 값
// for(let i =1;i<=square;i++){
//     if(square%i===0){
//         width = i;
//         height = square/i;
//         wh.push([width, height]);
//     }
// }

// const newWh = wh.filter(([w,h]) => (w >=h));
// console.log(newWh);

// for(let val of newWh){
//     let w = val[0];
//     let h = val[1];

//     if((w-2)*(h-2) === yellow){
//         console.log([w, h]);
//         return;
//     }
// }
