function solution(s) {
    answer =0
    c=0
    fc=s[0]
    for(a in s){
        if(c==0){
            fc=s[a]
            answer++
        }
        if(s[a]==fc){
            c++;
        }
        else{
            c--
        }
    }
    return answer;
}