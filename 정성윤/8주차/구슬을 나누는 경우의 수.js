function solution(balls, share) {
    let answer = 0;
    let factorial1 = 1;
    let factorial2 = 1;
    let factorial3 = 1;
    let minbs = balls - share
    for(let i = 1;i <= balls; i++){
        factorial1 *= i
    }
    for(let i = 1;i <= share; i++){
        factorial2 *= i
    }
    for(let i = 1;i <= minbs; i++){
        factorial3 *= i
    }
    
    answer = Math.round(factorial1 / (factorial2 * factorial3))
    
    return answer;
}

console.log(solution(3,2));
