function solution(str) {
    return str.trim().split(/\s+/).map(el => {
        return el.toLowerCase()
    })
}

console.log(solution("Hello   MUSINSA   Rookie"));