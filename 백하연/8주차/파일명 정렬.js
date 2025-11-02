/* 문제 핵심 ➡️ 안정 정렬(Stable Sort)
 * 파일명을 HEAD + NUMBER + TAIL로 분리
 * HEAD로 사전순 정렬 -> HEAD가 같으면 NUMBER의 숫자로 정렬 -> HEAD와 NUMBER가 같을 경우 원력 순서 유지
 */

function solution(files) {
  // 1. 정규표현식을 사용해서 파일명 규칙을 정하기
  // match() 함수가 null을 반환할 수 있으므로 null 체크 필요
  const regex = /^([a-z-]+)([0-9]{1,5})(.*)$/i

  // 2. 파일명을 HEAD, NUMBER, TAIL로 분리
  const parsed = files
    .map((filename, index) => {
      const match = filename.match(regex)

      // match가 null이면 null 반환
      if (!match) return null

      return {
        index: index,
        head: match[1].toUpperCase(),
        number: parseInt(match[2]),
        tail: match[3],
        filename,
      }
    })
    .filter((item) => item !== null) // null 값 제거

  // 3. 기준에 따라 파일명을 정렬
  parsed.sort((a, b) => {
    // 3-1. 우선 HEAD 부분을 기준으로 사전 순으로 정렬
    if (a.head > b.head) return 1
    if (a.head < b.head) return -1

    // 3-2. HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬
    if (a.number > b.number) return 1
    if (a.number < b.number) return -1

    return 0
  })

  return parsed.map((file) => file.filename)
}

console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']))
console.log(
  solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'])
)
