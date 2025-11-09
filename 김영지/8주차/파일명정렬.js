/** 문제 설명
 * 파일명 정렬
 * 세 차례의 코딩 테스트와 두 차례의 면접이라는 기나긴 블라인드 공채를 무사히 통과해 카카오에 입사한 무지는 파일 저장소 서버 관리를 맡게 되었다.
 * 저장소 서버에는 프로그램의 과거 버전을 모두 담고 있어, 이름 순으로 정렬된 파일 목록은 보기가 불편했다. 
 * 파일을 이름 순으로 정렬하면 나중에 만들어진 ver-10.zip이 ver-9.zip보다 먼저 표시되기 때문이다.
 * 버전 번호 외에도 숫자가 포함된 파일 목록은 여러 면에서 관리하기 불편했다. 
 * 예컨대 파일 목록이 ["img12.png", "img10.png", "img2.png", "img1.png"]일 경우, 
 * 일반적인 정렬은 ["img1.png", "img10.png", "img12.png", "img2.png"] 순이 되지만, 
 * 숫자 순으로 정렬된 ["img1.png", "img2.png", "img10.png", img12.png"] 순이 훨씬 자연스럽다.
 * 무지는 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.
 * 소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다. 
 * 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
 * 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.
 * HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
 * NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 
 * 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
 * TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다. 
 * 파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.
 * 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
 * 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 
 * 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
 * 두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다. 
 * MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.
 * 무지를 도와 파일명 정렬 프로그램을 구현하라.*/



/**나의 풀이 */
// 파일명에서 숫자가 나오기 전까지 HEAD로 정의하고, 
// 뒤 문자열에서 문자가 나오기 전까지 NUMBER로 정의,
// 나머지는 TAIL
// HEAD를 대소문자 관계없이 정렬, 그 다음 NUMBER 오름차순 정렬, 나머지는 원래 주어진 순서대로
function solution(files) {
    // 요소가 숫자인지 확인하는 정규식 표현
    let regex = /^[0-9]+$/;
    let fileArr = [];

    for(i in files){
        let str = [...files[i]];

        // 파일명의 숫자가 나타날 때의 인덱스 찾기
        let numIdx = str.findIndex((ele, idx, arr) => regex.test(ele));
        let HEAD = str.slice(0,numIdx).join('');
        // 숫자가 나온 뒤의 문자열
        let newStr = str.slice(numIdx);
        // 파일명의 숫자가 아닌 인덱스 찾기
        let charIdx = newStr.findIndex((ele, idx, arr) => !regex.test(ele));
        // 처음 시도에서 숫자가 아닌 인덱스가 나오지 않을 경우를 생각 못했다.(TAIL이 아무 글자가 없을 수 있음)
        // 숫자가 아닌 인덱스가 나오지 않을 경우(charIdx가 -1)
        let NUMBER = charIdx == -1 ? newStr.join('') : newStr.slice(0,charIdx).join('');
        let TAIL = charIdx == -1 ? '' : newStr.slice(charIdx).join('');

        fileArr.push({
            originals : files[i],   // 정답 출력 위한 풀네임
            HEAD : HEAD,
            NUMBER : NUMBER,
            TAIL : TAIL,
            index : Number(i)       // 원래 순서 유지 위한 인덱스 넣기(for...in의 경우 i가 string 값이므로 Number 변환)
        });
    }

    // 정렬
    fileArr.sort((a,b)=>{

        // fileArr의 객체 키 HEAD를 대소문자 구분없이 정렬
        if(a.HEAD.toLowerCase() > b.HEAD.toLowerCase()) return 1;
        if(a.HEAD.toLowerCase() < b.HEAD.toLowerCase()) return -1;

        // NUMBER를 오름차순 정렬
        if(Number(a.NUMBER) < Number(b.NUMBER)) return -1;
        if(Number(a.NUMBER) > Number(b.NUMBER)) return 1;

        // 원래 순서 유지
        return a.index - b.index;
    });

    // 결과값 출력 위해 originals 따로 담기
    let results = fileArr.map(item => item.originals);
    return results;
}


//=======================================연습장=========================================//
// let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
// let files = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

// let regex = /^[0-9]+$/;
// let HEAD = [];
// let NUMBER = [];
// let TAIL = [];
// let fileArr = [];

// for(i in files){
//     let str = [...files[i]];

//     // for(i in str){
//     //     if(regex.test(str[i])){
//     //         numIdx = i;
//     //         // console.log(numIdx);
//     //         return;
//     //     }
//     // }
//     let numIdx = str.findIndex((ele, idx, arr) => regex.test(ele));
//     // console.log(numIdx);
//     // HEAD.push(str.slice(0,numIdx).join(''));
//     let HEAD = str.slice(0,numIdx).join('');
//     let newStr = str.slice(numIdx);
//     // console.log(newStr);
//     // for(i in newStr){
//     //     if(!regex.test(newStr[i])){
//     //         numIdx = i;
//     //         return;
//     //     }
//     // }
//     let charIdx = newStr.findIndex((ele, idx, arr) => !regex.test(ele));
//     // console.log(charIdx);
//     // NUMBER.push(newStr.slice(0,charIdx).join(''));
//     let NUMBER = charIdx == -1 ? newStr.join('') : newStr.slice(0,charIdx).join('');
//     // console.log(lastStr);
//     // TAIL.push(lastStr.join(''));
//     let TAIL = charIdx == -1 ? '' : newStr.slice(charIdx).join('');

//     fileArr.push({
//         originals : files[i],
//         HEAD : HEAD,
//         NUMBER : NUMBER,
//         TAIL : TAIL,
//         index : Number(i)
//     });
// }

// console.log(fileArr);
// // console.log(HEAD);
// // console.log(NUMBER);
// // console.log(TAIL);

// fileArr.sort((a,b)=>{
//     // return a.HEAD.toLowerCase > b.HEAD.toLowerCase ? 1 : -1 || Number(a.NUMBER) - Number(b.NUMBER) || a.TAIL.toLowerCase > b.TAIL.toLowerCase ? 1 : -1;
//     // if(a.HEAD.toLowerCase > b.HEAD.toLowerCase || Number(a.NUMBER) > Number(b.NUMBER) || a.TAIL.toLowerCase > b.TAIL.toLowerCase) return 1;
//     // else if(a.HEAD.toLowerCase < b.HEAD.toLowerCase || Number(a.NUMBER) < Number(b.NUMBER) || a.TAIL.toLowerCase < b.TAIL.toLowerCase) return -1;
//     // else if(a.HEAD.toLowerCase === b.HEAD.toLowerCase || Number(a.NUMBER) === Number(b.NUMBER) || a.TAIL.toLowerCase === b.TAIL.toLowerCase) return 0;

//     if(a.HEAD.toLowerCase() > b.HEAD.toLowerCase()) return 1;
//     if(a.HEAD.toLowerCase() < b.HEAD.toLowerCase()) return -1;

//     if(Number(a.NUMBER) < Number(b.NUMBER)) return -1;
//     if(Number(a.NUMBER) > Number(b.NUMBER)) return 1;
    
//     return a.index - b.index;
// });
// let results = fileArr.map(item => item.originals);
// console.log(results);

// HEAD.sort((a,b)=>{
    // if(a.toLowerCase > b.toLowerCase) return 1;
    // if(a.toLowerCase < b.toLowerCase) return -1;
    // if(a.toLowerCase === b.toLowerCase) return 0;

// });
// console.log(HEAD);

// NUMBER.sort((a,b)=>{
//     if(Number(a) < Number(b)) return -1;
//     if(Number(a) > Number(b)) return 1;
//     if(Number(a) === Number(b)) return 0;
//     else return -1;
// });
// console.log(NUMBER);

// TAIL.sort((a,b)=>{
    // if(a.toLowerCase > b.toLowerCase) return 1;
    // if(a.toLowerCase < b.toLowerCase) return -1;
    // if(a.toLowerCase === b.toLowerCase) return 0;

// });
// console.log(TAIL);

// const arr = ['abc', 'xef', 'bcd'];

// arr.sort((a,b)=>{
//     return a > b ? 1 : -1;
// })

// console.log(arr);