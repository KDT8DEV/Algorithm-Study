// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.

// 나의 풀이
function solution(s) {
    let sentence = [];
    const sSplit = s.split(" ");

    sSplit.forEach((val, idx)=>{
        if(isNaN(sSplit[idx].charAt(0))){
            const newChar = sSplit[idx].charAt(0).toUpperCase() + sSplit[idx].substring(1).toLowerCase();
            sentence.push(newChar);
        }
        else{
            sentence.push(sSplit[idx].toLowerCase());
        }
    })

    return sentence.join(" ");
}

// 더 효율적인 풀이
function solution(s) {
    return s
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}



//==================================연습장 =========================================//
// let s = "3people unFollowed me"; //	"3people Unfollowed Me"
// // let s = "for the last week";    //	"For The Last Week"
// let sentence = [];

// const sSplit = s.split(" ");
// console.log(sSplit);
// console.log(isNaN(sSplit[0].charAt(0)));

// sSplit.forEach((val, idx)=>{
//     if(isNaN(sSplit[idx].charAt(0))){
//         const newChar = sSplit[idx].charAt(0).toUpperCase() + sSplit[idx].substring(1).toLowerCase();
//         sentence.push(newChar);
//     }
//     else{
//         sentence.push(sSplit[idx].toLowerCase());
//     }
// })

// console.log(sentence.join(" "));
