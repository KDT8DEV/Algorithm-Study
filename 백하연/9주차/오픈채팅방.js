/* 문제 설명
 * 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성
 */

function solution(record) {
  const regex = /^(Enter|Leave|Change)\s(\S+)(?:\s+(\S+))?$/

  const map = new Map()
  const events = []

  for (const rec of record) {
    const match = rec.match(regex)
    const [, command, uid, nickname] = match

    if (command === 'Enter') {
      map.set(uid, nickname)
      events.push([command, uid])
    } else if (command === 'Leave') {
      events.push([command, uid])
    } else {
      map.set(uid, nickname)
    }
  }

  return events.map(([command, uid]) => {
    const nickname = map.get(uid)
    return command === 'Enter' ? `${nickname}님이 들어왔습니다.` : `${nickname}님이 나갔습니다.`
  })
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
)

// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
