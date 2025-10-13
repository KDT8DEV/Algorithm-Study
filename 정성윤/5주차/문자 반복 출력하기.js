function solution(my_string, n) {
    let answer = [];
    let arrmystring = my_string.split("");
    for(let i = 0;i < arrmystring.length; i++){
        answer.push(arrmystring[i].repeat(n))
    }
    return answer.join("");
}
console.log(solution("hello",3));