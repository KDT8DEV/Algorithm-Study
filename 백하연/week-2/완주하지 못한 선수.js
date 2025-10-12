/* 문제 설명
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성
 */

/* 문제 풀이  */
/*
 * 제한사항
 * 1 >= 마라톤 경기에 참여한 선수의 수 <= 100,000
 * completion의 길이 =  participant의 길이 - 1
 * 참가자의 이름은 1개 이상 20개 이상의 알파벳 소문자로 이루어져 있다.
 * 참가자 중에는 동명이인이 있을 수 있다.
 */
function solution(p, c) {
  const participant = {}
  const completion = {}

  for (const key of p) {
    participant[key] = (participant[key] || 0) + 1
  }

  for (const key of c) {
    completion[key] = (completion[key] || 0) + 1
  }

  for (const [key] of Object.entries(participant)) {
    if (!completion[key] || completion[key] < participant[key]) return key
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])) // 'leo'
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
) // 'vinko'
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
) // mislav

/*
* 문제풀이 1
* ❌ TypeError: setParticipant.difference is not a function
function solution(participant, completion) {
  const setParticipant = new Set(participant)
  const setCompletion = new Set(completion)
  const diff = setParticipant.difference(setCompletion)
  const [n] = Array.from(diff)

  return n
}
*/

/*
* 문제 풀이 2
* ❌ 테스트케이스 3에서 undefined 출력 -> 동명이인이 있을 수 있다는 제한사항 처리 필요
function solution(participant, completion) {
  const setParticipant = new Set(participant)
  const setCompletion = new Set(completion)
  console.log('참가자', setParticipant)
  console.log('완주자', setCompletion)

  const diff = new Set([...setParticipant].filter((v) => !setCompletion.has(v)))
  const [n] = [...diff]
  console.log(n)

  return n
}
*/
