function solution(name, yearning, photo) {
    answer = []
    for (arr of photo) {
        sum = 0
        for (a of arr) {
            idx = name.indexOf(a)
            if (idx != -1) {
                sum += yearning[idx]
                console.log(sum)
            }
        }
        answer.push(sum)
    }
    return answer
}
console.log(
    solution(["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
    )
)
