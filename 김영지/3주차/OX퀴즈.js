/**
 * 문제 설명
 */
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

/**
 * 제한 사항
 */
// 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
// 1 ≤ quiz의 길이 ≤ 10
// X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
// X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
// -10,000 ≤ X, Y ≤ 10,000
// -20,000 ≤ Z ≤ 20,000
// [연산자]는 + 와 - 중 하나입니다.

/**
 * 나의 풀이
 */
// split 함수 이용해서 숫자와 연산자를 배열에 넣었다.
// 연산자 값인 op가 "+"인지 "-"인지 비교해서 result 값에 계산해 값을 넣어준다.
// 계산한 result값과 z값을 비교해 array값에 O 혹은 X를 넣는다.
function solution(quiz) {
    let array = [];

    for(let q of quiz){
        // console.log(q.split(" "));
        var qArr = q.split(" ");
        var x = qArr[0];
        var y = qArr[2];
        var z = qArr[4];
        var op = qArr[1];

        var result = 0;

        if(op === "+"){
            result = Number(x) + Number(y);
        }
        else if(op === "-"){
            result = Number(x) - Number(y);    
        }

        (Number(z) === result) ? array.push("O") : array.push("X");
    }
    return array;
}

// for(let q of quiz){
//     // console.log(q.split(" "));
//     var qArr = q.split(" ");
//     var x = qArr[0];
//     var y = qArr[2];
//     var z = qArr[4];
//     var op = qArr[1];

//     var result = 0;

//     if(op === "+"){
//         result = Number(x) + Number(y);
//     }
//     else if(op === "-"){
//         result = Number(x) - Number(y);    
//     }

//     let q1 = `${qArr[0]} ${qArr[1]} ${qArr[2]}`
//     // console.log(q1);
//     let q2 = qArr[0] + qArr[1] + qArr[2];
//     // console.log(q2);

//     let answer;
//     // console.log(qArr[4]);
//     (Number(z) === result) ? array.push("O") : array.push("X");
//     // console.log(answer);
// }
// console.log(array);


/**
 * 다른 사람 풀이
 */
// split으로 나눈 배열을 구조분해할당해 코드를 더 깔끔하게 써줬다.
function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        sum === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}

// eval 함수
// eval은 문자열을 코드로 실행하는 함수
// 강력하지만 보안, 성능, 가독성 문제 때문에 권장되지 않음
function solution(quiz) {
    let ans = [];
    for (let q of quiz) {
        let c = q.split('=');
        ans.push(eval(c[0]) === +c[1] ? 'O' : 'X');
    }
    return ans;
}