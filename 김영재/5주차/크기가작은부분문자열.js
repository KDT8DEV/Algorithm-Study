function solution(t, p) {
    var answer = 0;
    for (i = 0; i <= t.length - p.length; i++) {
        if (Number(t.slice(i, i + p.length)) <= Number(p)) {
            answer++
        }
    }
    return answer;
}

// console.log(solution("3141592","271"));
console.log(solution("500220839878", "7"))


