/**문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다. */

/**나의 풀이 */
// 1~n을 반복문 돌려서 n을 나눈 값이 0이면 약수
// 조건에 만족한 i값을 더한다.
function solution(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            sum+=i;
        }
    }
    return sum;
}

//======================연습장===================//
// let n = 12	// 28
// let n =5	// 6
// let sum = 0;
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         sum+=i;
//     }
// }
// console.log(sum);
