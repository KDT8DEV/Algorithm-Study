/**
 * 문제 설명
 * 두 정수 left와 right가 매개변수로 주어집니다. 
 * left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
 * 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

/**
 * 제한사항
 * 1 ≤ left ≤ right ≤ 1,000 */

/**
 * 나의 풀이
 */
// 어떤 숫자 n의 약수의 개수를 구하려면
// 1부터 n까지의 숫자를 반복문으로 돌려(i) n이 그 숫자로 나눠지는 갯수를 구한다.
// i가 n의 약수라면 n은 i의 배수이기 때문
// 반복문을 돌리는 배열 범위를 0으로 채운 arr를 준비한다.
function solution(left, right) {
    let arr = new Array(right-left+1).fill(0);

    for(let i = left; i <= right; i++){
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                arr[i-left]++;
            }
        }
    }

    let sum = 0
    arr.forEach((val, idx)=>{
        if(val % 2 === 0){
            sum += idx+left;
        } else{
            sum -= idx+left;
        }
    });

    return sum;
}

//===================연습장====================//
// let left = 13;
// let right = 17; // 43

// let left = 24	
// let right = 27  //	52

// let arr = new Array(right-left+1).fill(0);

// for(let i = left; i <= right; i++){
//     for(let j = 1; j <= i; j++){
//         if(i % j === 0){
//             arr[i-left]++;
//         }
//     }
// }

// let sum = 0
// arr.forEach((val, idx)=>{
//     if(val % 2 === 0){
//         sum += idx+left;
//     } else{
//         sum -= idx+left;
//     }
// });

// console.log(sum);