function solution(arr)
{
    var answer = [];
    let first =-1;
    for(el of arr){
        if(first!=el){
            first=el
            answer.push(el)
        }
    }
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))