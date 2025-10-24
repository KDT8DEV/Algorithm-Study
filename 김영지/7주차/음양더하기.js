// 문제 설명
// 어떤 정수들이 있습니다. 
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(absolutes, signs) {
    let sum=0;
    signs.forEach((val, idx)=>{
        sum += val ? absolutes[idx] : parseInt('-'+absolutes[idx]);
    });
    return sum;
}

// 다른 사람 풀이
// signs의 불리언 값을 1과 -1로 치환해 value와 곱해버린 것이 인상적
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

//=====================연습장=====================//
// let absolutes = [4,7,12];
// let signs =	[true,false,true];	// 9
let absolutes = [1,2,3];
let signs =	[false,false,true]	// 0
let arr = [];
let sum=0;
signs.forEach((val, idx)=>{
    sum += val ? absolutes[idx] : parseInt('-'+absolutes[idx]);
});
console.log(sum);