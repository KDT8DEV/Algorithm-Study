/**문제 설명
네오와 프로도가 숫자놀이를 하고 있습니다. 
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 
혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요. 
*/

/**나의 풀이 */
// 문자열이 숫자인지 확인 : 정규식 
// 문자열이 숫자인지 확인 없어도 됨
// replaceAll 사용
// for(...in ...) 사용해 객체의 키와 값 가져올 수 있음
function solution(s) {
    let answer = "";
    let numSet = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }

    //문자열이 숫자인지 확인 : 정규식 
    function isNum(val){
        let pattern = /^[0-9]+$/;
        return pattern.test(val);
    }


    if(isNum(s)){
        answer = Number(s);
    }else{
        for(let key in numSet){
            s = s.replaceAll(key, numSet[key]);
        }
        answer = Number(s);
    }
    return answer;
}
//=========================연습장=============================//
// let s = "one4seveneight";	// 1478

// let numSet = {
//     "zero": 0,
//     "one": 1,
//     "two": 2,
//     "three": 3,
//     "four": 4,
//     "five": 5,
//     "six": 6,
//     "seven": 7,
//     "eight": 8,
//     "nine": 9
// }

// //문자열이 숫자인지 확인 : 정규식 
// function isNum(val){
//     let pattern = /^[0-9]+$/;
//     return pattern.test(val);
// }


// if(isNum(s)){
//     console.log(s);
// }else{
//     for(let key in numSet){
//         s = s.replaceAll(key, numSet[key]);
//     }
//     console.log(s);
// }