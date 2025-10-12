function solution(today, terms, privacies) {
    var answer = [];
    keyMap = {}
    terms.map(el => {
        el = el.split(" ")
        keyMap[el[0]] = parseInt(el[1])
    })
    privacies = privacies.map((el, idx) => {
        el = el.split(/[. ]/)

        const date = new Date(el.slice(0, 3))
        date.setMonth(date.getMonth() + keyMap[el[3]])

        if (new Date(today.replaceAll('.', '-')) > date)
            answer.push(idx + 1)
    })

    return answer;
}
today = "2022.05.19"
terms = ["A 6", "B 12", "C 3"]
privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

console.log(solution(today, terms, privacies));


