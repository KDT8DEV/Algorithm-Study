// function solution(queries) {

//     let answer = [];
//     let gene = ["Rr"];

//     for (i = 1; i < 3; i++) {
//         let tmp = []
//         gene.map((el, idx) => {
//             console.log(`${i}세대${el}의 자식`);
//             let first = el[0];
//             let second = el[1];
//             tmp.push(first + first)
//             tmp.push(first + second)
//             tmp.push(first + second)
//             tmp.push(second + second)
//         })
//         console.log(tmp, "까지");
//         gene = tmp;
//         tmp = []

//         queries.forEach(element => {
//             console.log(element);
//             if (element[0] - 1 == i) {
//                 answer.push(gene[element[1] - 1])
//             }
//         });
//     }

//     return answer;
// }
//반복문으로 푼 시도
//세대별로 계산은 가능함

function solution(queries){
    function dfs(gen,num){
        console.log(`${gen}세대`);
        if(gen==1)return "Rr";
        idx=Math.floor(num/4)
        parent = dfs(gen-1,idx)
        child=num%4
        console.log(`${gen}세대 부모`,child , parent);
        if(parent=="RR")return"RR";
        if(parent=="rr")return"rr";

        if(child==0){
            return "RR"
        }else if(child==3){
            return "rr"
        }
        else {
            return "Rr"
        }
    }
    
    return queries.map(([generation, index]) => dfs(generation, index - 1));
}
 

// // 4세대 26이면 /4 = 6반인덱스의 의 26%4= 2번째 자식 "Rr"
// // 3세대 6이면 /4 = 1번 인덱스의 2번째 자식 "Rr"
// // 2세대 1이면 /4 0번인덱스의 1번째 자식 "Rr"
// // 1세대 0이면 계산 "Rr"
console.log(solution([[4,26]]));
 
  