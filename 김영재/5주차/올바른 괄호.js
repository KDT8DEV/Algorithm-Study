function solution(s) {
    let answer = 0
    for (c of s) {
        if (c == ")") {
            answer--
        }
        else if (c == "(") {
            answer++
        }
        if (answer < 0) {
            return false
        }
    }

    return answer == 0 ? true : false;
}

 