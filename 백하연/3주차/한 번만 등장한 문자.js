/* 문제 설명
 * 문자열 s가 매개변수로 주어집니다.
 * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
 * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */
function solution(s) {
  const map = new Map()
  let str = []

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }

  console.log(map)

  for (const [k, v] of map) {
    if (v === 1) str.push(k)
  }

  console.log(str.sort().join(''))

  return str.sort().join('')
}

solution('abcabcadc')
solution('abdc')
solution('hello')
