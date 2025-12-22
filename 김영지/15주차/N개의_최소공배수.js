/**문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
예를 들어 2와 7의 최소공배수는 14가 됩니다. 
정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. 
n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다. */

/**나의 풀이 */
// 유클리드 호제법
// 큰 수를 작은 수로 나눈 나머지로 계속 바꿔가면, 나머지가 0이 되는 순간의 값이 최대공약수
// 최소공배수 : 두 수를 곱한 값을 두 수의 최대공약수로 나눈 값
function solution(arr) {
    // 최대공약수
    const lcm = (a, b) => {
        while (b !== 0) {
            r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    // 최소공배수
    const gcd = (a, b) => {
        return (a * b) / lcm(a, b);
    }

    const k = arr.reduce((acc, curr) => {
        return gcd(acc, curr);
    })

    return k;
}

//=====================연습장=======================//
// let arr = [2,6,8,14];	// 168
// // let arr = [1,2,3];      //	6

// // 2와 6의 최대공약수
// let a = 2;
// let b = 6;
// let r;

// // 최대공약수
// const lcm = (a, b) => {
//     while (b !== 0) {
//         r = a % b;
//         a = b;
//         b = r;
//     }
//     return a;
// }

// // 최소공배수
// const gcd = (a, b) => {
//     return (a * b) / lcm(a, b);
// }

// const k = arr.reduce((acc, curr) => {
//     return gcd(acc, curr);
// })

// console.log(k);

