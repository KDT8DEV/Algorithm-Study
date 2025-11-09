/**문제 설명
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요. */

/**나의 풀이 */
// reduce로 배열 합계 구해 0~9 합계인 45에서 빼준다. 
function solution(numbers) {
    // 0 ~ 9 더한 수
    const allSum = 9*10/2;

    // numbers 합계
    const sum = numbers.reduce((acc, curr) => {
        return acc + curr
    });

    return allSum - sum;
}

//===========================연습장================================//

// let numbers = [1,2,3,4,6,7,8,0]; //	14

// // 0 ~ 9 더한 수
// const allSum = 9*10/2;

// // numbers 합계
// const sum = numbers.reduce((acc, curr) => {
//     return acc + curr
// });

// console.log(sum);
// console.log(allSum - sum);