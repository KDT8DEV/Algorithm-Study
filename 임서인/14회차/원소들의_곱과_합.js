function solution(num_list,sum=0,mul=1) {
    num_list.forEach((e)=>{
        sum+=e;
        mul*=e
    })
    return (sum*sum)>mul?1:0;
}