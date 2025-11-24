function solution(strlist) {
    var answer = [];
    for(let i = 0; i < strlist.length;i++)
        answer.push(strlist[i].length)
    return answer;
}

console.log(solution(["We", "are", "the", "world!"]));


// function solution(strlist) {
//     return strlist.map((el) => el.length)
// }