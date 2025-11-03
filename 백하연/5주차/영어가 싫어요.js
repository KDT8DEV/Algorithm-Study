/* 문제 설명
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return
 */
function solution(numbers) {
  const map = new Map([
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
  ])

  let result = numbers
  for (const [k, v] of map) {
    result = result.replaceAll(k, v)
  }

  return +result
}
solution('onetwothreefourfivesixseveneightnine')
solution('onefourzerosixseven')
