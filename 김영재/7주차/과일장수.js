function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a);
    for(i=0;i<Math.floor(score.length/m);i++){
        if(i*m+m>score.length)break;
        answer+=score.slice(i*m,i*m+m)[m-1]*m;
    }
    return answer;
}

console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]));
