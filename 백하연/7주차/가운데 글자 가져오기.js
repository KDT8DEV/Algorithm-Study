function solution(s) {
  const idx = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? s.slice(idx - 1, idx + 1) : s.slice(idx, idx + 1)
}
solution('abcde') // length: 5, index: 2 - c abcdefg
solution('abcdefg')
solution('qwer') // length : 4, index: 1,2
