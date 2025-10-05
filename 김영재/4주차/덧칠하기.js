function solution(n, m, section) {
    
    answer=Array(n).fill(0)
    for(i in answer){
        answer[i]=+i+1
    }
    x=+section[0]
    y=x+m
    ans=0
    for(i in section){
         el = section[i]
        if(el>x && el<y){
        }
        else {
            x=+el
            y=x+m
            ans++
        }
    }
    return ans;
}
console.log(solution(8,	4,[2, 3, 6]))