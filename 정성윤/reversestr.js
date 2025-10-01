function solution(my_string) {
    var answer = '';
    arr = []
    for (let i = 0; i <my_string.length; i++){
        arr.push(my_string[i])
    }
    answer = arr.reverse()
    return answer.join("");
}
console.log(solution("jaron"))