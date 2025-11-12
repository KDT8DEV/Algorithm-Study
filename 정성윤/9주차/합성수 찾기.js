function solution(n) {
    let answer = 0;
    let result = [];
    for(let i=1; i<=n; i++) { // 6까지 i= 4 % j = 2
        let count = 0;
        for(j=1; j<=i; j++) { // 나누는 수 1~6까지
            if(i%j===0){
                count ++;
            }
        }
        result.push(count);
    }
    for(let i = 1; i <= result.length; i++){
        if (result[i] >= 3){
            answer++;
        }
    }
    return answer;
}
console.log(solution(10));

