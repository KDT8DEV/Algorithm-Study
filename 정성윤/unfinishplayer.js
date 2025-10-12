
//1명 이상 100,000명 이하 >> for 2번 시간초과
// function solution(participant, completion) {
//     for(let i = 0; i < participant.length; i++) {
//         for(let j = 0; j < completion.length; j++) {
//             if (participant[i] === completion[j]) {
//                 participant.splice(i, 1);
//                 completion.splice(j, 1);
//                 i--
//                 j--
//             }
//         }
//     }
//     return participant.join("");
    
// }

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));

//이것도 시간초과

function solution(participant, completion) {
    participant = participant.filter((i) => {
        let idx = completion.indexOf(i); 
        if (idx !== -1) {
            completion.splice(idx, 1); 
            return false;        
        }
        return true;             
    });

    return participant.join("");
}

function solution(participant, completion) {
    participant.sort();  
    completion.sort();   

    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
        }
    return participant[participant.length - 1];
}