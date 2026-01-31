/**문제 설명
당신은 특별한 일진법 계산기를 만들려고 합니다.
특별한 일진법은 0으로만 이루어진 수를 나타냅니다.
특별한 일진법을 십진법으로 변환하면 다음과 같습니다.
특별한 일진법에서 0이 n개 연속으로 있는 수는 십진법으로 **n - 1**을 나타냅니다.
특별한 일진법 계산기는 0, +, -로 이루어진 수식을 입력받아,
이를 십진법으로 계산한 결과를 출력합니다.
만약 계산할 수 없는 수식이 입력되면 "ERROR"를 출력합니다.

다음 중 하나라도 해당되면 계산할 수 없는 수식입니다.
+ 또는 -가 연속으로 두 개 이상 존재하는 수식
(예: 0++0, 0--00, 00+-0, 0-+0, 0+++0)
+ 또는 -로 끝나는 수식
(예: +, 0+00+, 0-)

그 외의 경우에는 사칙연산 규칙을 따라 계산합니다.
계산기에 입력한 수식을 담은 문자열 expression이 매개변수로 주어집니다.
이때 수식의 결과를 문자열로 반환하도록 solution 함수를 완성하세요.
단, 계산 결과가 -0인 경우에는 항상 "0"으로 출력합니다.

제한사항
1 ≤ expression의 길이 ≤ 100,000
expression은 0, +, -로만 이루어진 문자열입니다.

*/

/**나의 풀이 */
function solution(expression) {
    let result = 0;
    let zeroCount = 0;
    let sign = 1;        // 현재 부호
    let prevOp = false; // 직전 문자가 연산자인지

    for (let ch of expression) {
        if (ch === '0') {
            zeroCount++;
            prevOp = false;
        } else { // + or -
            // 연산자 연속
            if (prevOp) return "ERROR";

            // 앞에 숫자가 있으면 계산
            if (zeroCount > 0) {
                result += sign * (zeroCount - 1);
                zeroCount = 0;
            }

            sign = (ch === '+') ? 1 : -1;
            prevOp = true;
        }
    }

    // 연산자로 끝난 경우
    if (prevOp) return "ERROR";

    // 마지막 숫자 처리
    if (zeroCount > 0) {
        result += sign * (zeroCount - 1);
    }

    // -0 처리
    if (result === 0) return "0";
    return result.toString();
}

//========================================================//
// function solution(expression) {
//     let sum = 0;
//     const idx = [...expression].map((v, i) => {
//         if(v !=='0') return i;        
//     })
//     const arr = idx.filter(v => v !== undefined);
//     // console.log(arr);
//     if(expression.length-1 === arr[arr.length-1]) return "ERROR";
//     for(let i =0; i<arr.length;i++){
//         let idx = arr[i];
//         let num;
//         if(arr[i+1] === undefined) {
//             num = expression.length - arr[i] - 2;
//         }else{
//             num = arr[i+1] - arr[i] - 2;
//         }
        
//         // console.log(num);
//         if(num === -1) return "ERROR";
//         if(expression[idx] === '+'){
//             sum += num;
//         }else{
//             sum -= num;
//         }
//     }
//     return sum.toString();
// }