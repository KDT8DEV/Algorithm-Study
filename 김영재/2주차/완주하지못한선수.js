// function solution(participant, completion) {
//     var answer = '';
//     for (a in completion){
//         (participant.splice(participant.indexOf(completion[a]),1));
//     }
//     return participant[0]; 
// }
// console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))

//효율성 문제로 제출이 안됨


//두번째 풀이
//두 배열의 차이는 1
//완주하지못한 선수는 1명
//줄세워서 가장 마지막 사람 하려고 했음 (틀렸음, 이름순)
function solution(participant, completion) {
    participant.sort()
    completion.sort()

    for(a in participant){
        console.log(participant[a], completion[a])
        if(participant[a]!=completion[a])
            return participant[a]
    }
}
console.log(solution(["a", "b", "c"],["a", "c"]))
