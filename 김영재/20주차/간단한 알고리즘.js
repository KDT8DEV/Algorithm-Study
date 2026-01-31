function solution(num) {
    let answer = [];
    for (let i = 2; i <= num; i++) {
        let flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag)
            answer.push(i)
    }
    return answer.join(" ");
}

console.log(solution(10
));