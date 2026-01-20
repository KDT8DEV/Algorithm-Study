/**문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다. 
*/

/**나의 풀이 */
function solution(arr) {
    if(arr.length === 1) return [-1];
    let min = Math.min(...arr);
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    return arr;
}

//=============================
// let arr = [4,3,2,1];

// if(arr.length === 1) return [-1];
// let min = Math.min(...arr);
// console.log(min);
// let idx = arr.indexOf(min);
// console.log(idx);
// arr.splice(idx, 1);
// console.log(arr);
// return arr;

//=============================