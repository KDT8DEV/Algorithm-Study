// 문제 설명
// 알파벳 소문자로만 이루어진 어떤 문자열에서, 2회 이상 나타난 알파벳이 2개 이상의 부분으로 나뉘어 있으면 외톨이 알파벳이라고 정의합니다.
// 문자열 "edeaaabbccd"를 예시로 들어보면,
// a는 2회 이상 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ede(aaa)bbccd"
// b, c도 a와 같은 이유로 외톨이 알파벳이 아닙니다.
// d는 2회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "e(d)eaaabbcc(d)"
// e도 d와 같은 이유로 외톨이 알파벳입니다.
// 문자열 "eeddee"를 예시로 들어보면,
// e는 4회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "(ee)dd(ee)"
// d는 2회 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ee(dd)ee"
// 문자열 input_string이 주어졌을 때, 외톨이 알파벳들을 알파벳순으로 이어 붙인 문자열을 return 하도록 solution 함수를 완성해주세요. 만약, 외톨이 알파벳이 없다면 문자열 "N"을 return 합니다.

// 나의 풀이
function solution(input_string) {
    let splitArr = [];
    let first = -1;     // 첫번째 문자 아무거나 셋팅
    // 반복문 돌려서 이전 문자랑 같지 않으면 splitArr 배열에 넣는다.
    for(s of input_string){
        if(first != s){
            splitArr.push(s);
            first = s;
        }
    }

    // splitArr에 중복되는 문자 확인
    const dup = [...new Set(splitArr.filter(val => splitArr.indexOf(val) !== splitArr.lastIndexOf(val)))];
    dup.sort();     // 오름차순 정렬
    return dup.length === 0 ? "N" : dup.join('')
}



//==========================테스트=======================================//

// let input_string = "string";   // de
// // "edeaaabbccd"        // e
// // let arr = [...input_string];
// // console.log(arr);
// // let uniqArr = [...new Set(input_string)];
// // console.log(uniqArr); 

// // // 2회 이상 등장 문자
// // const dupl = uniqArr.filter(uniq=> arr.filter(a=>a===uniq).length >=2);
// // console.log(dupl);

// let splitArr = [];
// let first = -1;
// // for(val of input_string){
// //     if(!arr.find(v=>v===val)){
// //         arr.push(val)
// //     }
// // }

// for(s of input_string){
//     if(first != s){
//         splitArr.push(s);
//         first = s;
//     }
// }
// console.log(splitArr);

// const dup = [...new Set(splitArr.filter(val => splitArr.indexOf(val) !== splitArr.lastIndexOf(val)))];
// dup.sort();
// console.log(dup);