function solution(n) {
  return '수박'.repeat(n).substring(0, n)
}
console.log(solution(3)) // "수박수"
console.log(solution(4)) // "수박수박"
console.log(solution(5)) // "수박수박수"
