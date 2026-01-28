function solution(n,result=[]) {
   for(let i=1;i<=n;i++){
       if(n%i==0){
           result.push(i)
       }
   }
    return result
}

// 1부터 n까지의 수 중에서 n을 나누었을 때 나머지가 0인 수들을 result 배열에 담아 리턴한다.


