// function solution(cards1, cards2, goal) {
//     var answer = '';
//     let c1 = goal.join(' ');
//     let c2 =goal.join(' ');
//     for(a of cards2){
//         c1=c1.replace(a, '');
//     }
//     for(a of cards1){
//         c2=c2.replace(a, '');
//     }
//     if(cards1.join("").replace(c1,"")=="" && cards2.join("").replace(c2,"")==""){
//         return "Yes";
//     }
//     else{
//             return "No";
//     }
// }
//맞는 로직이라 생각했지만 구조적 문제가 있음

function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    for (let word of goal) {
        if (cards1[i] === word) { //순서에 맞는 단어라면
            i++;
        } else if (cards2[j] === word) { //순서에 맞는 단어라면
            j++;
        } else {
            return "No"; //순서대로 나오지 않으면
        }
    }
    return "Yes"; //순서대로 사용했다면
}

console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]))