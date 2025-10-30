/**문제 설명
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
 * 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다. */



/**나의 풀이 
 * 정규식 표현으로 숫자 표현
 * 정규식 표현.test(확인할 문자열) 활용
*/
function solution(s) {
    let regex = /^[0-9]+$/;     // 숫자 정규식 표현
    return (s.length == 4 || s.length == 6) && regex.test(s);
}


//=========================연습장==========================//
// let s = "a234"; // false
// let s = "1234"; // true
// console.log(Number(s));
// let arr = [...s];
// let strYn = arr.some(v => typeof(v) == "string");
// console.log(strYn);
// console.log(s.length);

// if(s.length == 4 || s.length == 6 ){
//     // 숫자면
//     if(!isNaN(s)){
//         return true;
//     }else{
//         return false;
//     }
// }
// else{
//     return false;
// }

