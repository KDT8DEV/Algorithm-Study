// function solution(box, n) {
//     var answer = 0;
//     console.log(...box);
//     return answer;
// }
// console.log(solution([1, 1, 1],1));

function solution(box, n) {
    var answer = 1;
    for(let i =0; i<box.length; i++){
        answer *= Math.floor(box[i]/n)
    }
    return answer;
}
console.log(solution([2,1,1],1));
