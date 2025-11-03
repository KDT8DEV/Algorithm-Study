function solution(a, b, n) {
    let total = 0;
    //빈병 a 새 콜라 b 빈 병n개를 주면 몇개를 받을 수 있나?
    while (n >= a) {
        const exchanged = Math.floor(n / a) * b; 
        total += exchanged;
        n = (n % a) + exchanged; 
        //다음 n은 a개씩 짝지어서 바꾸고 남은 n%a에다가 새로 받은 콜라를 마시고 난 빈병을 더함
    }

    return total;
}
console.log(solution(2	,1	,20));
