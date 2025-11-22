/**문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요. */

/**나의 풀이 */
// repeat 함수
function solution(phone_number) {
    let backNum = phone_number.slice(-4);
    let starLength = phone_number.length - backNum.length;
    let starPart = '*'.repeat(starLength);
    let answer = starPart + backNum;
    
    return answer;
}

/**다른 사람 풀이 */
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}

//===============연습장============================//
// let phone_number = "01033334444"	// "*******4444"

// let backNum = phone_number.slice(-4);
// console.log(backNum);
// let starLength = phone_number.length - backNum.length;
// let starPart = '*'.repeat(starLength);
// console.log(starPart);
// let answer = starPart + backNum;
// console.log(answer);