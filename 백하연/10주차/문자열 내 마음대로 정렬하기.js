/* 문제 설명
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 */
function solution(strings, n) {
  return strings
    .map((str, index) => ({ n: str[n], str }))
    .sort((a, b) => {
      if (a.n > b.n) return 1
      if (a.n < b.n) return -1

      if (a.n === b.n) {
        if (a.str > b.str) return 1
        if (a.str < b.str) return -1
      }

      return 0
    })
    .map((v) => v.str)
}
solution(['sun', 'bed', 'car'], 1) // ["car", "bed", "sun"]
solution(['abce', 'abcd', 'cdx'], 2) // ["abcd", "abce", "cdx"]

/* 다른 사람의 풀이
 * localeCompare() 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환
 */
function other_solution(strings, n) {
  console.log(
    strings.sort((s1, s2) => {
      if (s1[n] === s2[n]) {
        console.log(s1.localeCompare(s2))
      }
    })
  )

  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  )
}
console.log(other_solution(['sun', 'bed', 'car'], 1))
console.log(other_solution(['abce', 'abcd', 'cdx'], 2))
