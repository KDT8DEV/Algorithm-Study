/** 문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

/** 제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 */

/**나의 풀이 */
function solution(a, b) {
  let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let sum = 0;

  for (let i = 1; i < a; i++) {
    if (i < 8 && i !== 2) {
      if (i % 2 === 0) {
        sum += 30;
      } else {
        sum += 31;
      }
    } else if (i === 2) {
      sum += 29;
    } else if (i >= 8) {
      if (i % 2 === 0) {
        sum += 31;
      } else {
        sum += 30;
      }
    }
  }

  sum += b;

  return week[sum % 7];
}

//=======================================//
// let a = 5;
// let b = 24; // "TUE"
// let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

// // 1/1 1/2 1/3 1/4 1/5 1/6 1/7 1/8 1/9 1/10 1/11  1/12  13  14  15  16  17
// // 금   토  일   월  화  수  목   금  토   일   월    화    수  목   금  토  일
// let sum = 0;

// for (let i = 1; i < a; i++) {
//   if (i < 8 && i !== 2) {
//     if (i % 2 === 0) {
//       sum += 30;
//     } else {
//       sum += 31;
//     }
//   } else if (i === 2) {
//     sum += 29;
//   } else if (i >= 8) {
//     if (i % 2 === 0) {
//       sum += 31;
//     } else {
//       sum += 30;
//     }
//   }
// }

// sum += b;

// console.log(week[sum % 7]);
