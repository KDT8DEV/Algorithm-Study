/**문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 */

/**나의 풀이 */
// 진법 변환 : n.toString(진법)
// 배열화 : split('')
// 뒤집기 : reverse()
// 배열의 문자열화 : join('')
// 십진법화 : parseInt()
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

//=========================================//
// let n = 45; // 7
// console.log(n.toString(3));
// let k = n.toString(3).split("");
// console.log(k);
// console.log(parseInt(n.toString(3).split("").reverse().join(""), 3));
