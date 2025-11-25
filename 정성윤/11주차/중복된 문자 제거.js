function solution(my_string) {
    const answer = new Set();
    for(let i = 0; i < my_string.length; i++)
        answer.add(my_string[i])
    return [...answer].join("");
}

console.log(solution("people"));