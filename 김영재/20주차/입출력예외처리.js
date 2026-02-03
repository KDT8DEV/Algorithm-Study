function solution(str) {
    let flag = false;
    let answer = str.trim().split(/\s+/).reduce((acc, cur) => {
        if (Number.isNaN(Number(cur))) flag = true;
        return acc + Number(cur)
    }, 0)
    if (flag) return "invalid input"

    return answer;
}

console.log(solution("10 20 30"
));