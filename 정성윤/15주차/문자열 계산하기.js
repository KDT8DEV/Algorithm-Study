function solution(my_string) {
    const tokens = my_string.split(" "); 
    let answer = Number(tokens[0]);       // 첫 숫자를 초기값으로 설정

    for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === "+") {
            answer += Number(tokens[i + 1]); 
        } else {
            answer -= Number(tokens[i + 1]); 
        }
    }

    return answer; 
}
