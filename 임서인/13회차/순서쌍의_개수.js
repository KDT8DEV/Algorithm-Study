function solution(n,cnt=0) {
    for(let i=1;i<=n;i++){
        n%i==0?cnt++:0;
    }
    return cnt;
}

// 나누어 떨어지는 횟수를 구한다