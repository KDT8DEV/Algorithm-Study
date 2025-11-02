// function solution(s) {
//     sport=Array.from({length : s[0].length} ,()=> 0)
//     //배열에 한명씩 해서 그 사람의 가장 큰 점수를 배열의 가장 작은 점수와 비교.
//     for(i=0; i<s.length;i++){

//         s[i].map((el,idx) =>{
//             if(sport[idx]==Math.min(...sport) && sport[idx]<el){
//                 sport[idx]=el
//             }
//         })

//     }
//     return acc=sport.reduce((acc,cur)=>{
//         return acc+=cur
//     });


// } //테스트케이스는 만족, 제출이 안됨 잘못풀음
function solution(ability) {
    const N = ability.length;      // 학생 수
    const M = ability[0].length;   // 종목 수
    let maxScore = 0;
    const visited = Array(N).fill(false); // 학생 사용 여부
    function dfs(depth, total) {
        if (depth === M) {
            maxScore = Math.max(maxScore, total);
            
            return;
        }

        for (let i = 0; i < N; i++) {
            console.log(` 사람: ${i} 검색 여부 : ${visited[i]} `)
            if (!visited[i]) {
        
                visited[i] = true;
                console.log(` 종목 : ${depth} 점수:${ability[i][depth]} 총합:${total} 최댓값 :${maxScore}`)    
                dfs(depth + 1, total + ability[i][depth]);

                visited[i] = false;
            }
            
        }
        
    }

    dfs(0, 0);
    return maxScore;
}
console.log(solution([
    [40, 10, 10],
    [20, 5, 0],
    [30, 30, 30],
    [70, 0, 70],
    [100, 100, 100]]));

// console.log(solution([
//     [20, 30],
//     [30, 20],
//     [20, 30]
// ]));

// 	테니스	탁구	수영
// 석환	40	10	10
// 영재	20	5	0
// 인용	30	30	30
// 정현	70	0	70
// 준모	100	100	100

console.log(Math.max(...[1, 2, 3]))
