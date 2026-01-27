function solution(people, limit,cnt=0,result=0) {
    people.sort((a,b)=>a-b)
    let left = 0
    let right = people.length-1
    
    while(left<=right){
        if(left == right){
            cnt++
            break;
        }else if(people[left]+people[right]>limit){
            right--
            cnt++
        }else if(people[left]+people[right]<=limit){
            left++
            right--
            cnt++
        }
    }
    return cnt
}
// 10 20 30 40 50 50 60 60 70 

// 10 70 80 ++
// 20 60 80 ++
// 30 50 80 ++
// 40 50 90 ++
// 50
function solution1(people, limit,cnt=0,result=0) {
    people.sort((a,b)=>a-b)
    let overHalf = people.filter((e)=>e>limit/2)
    let underHalf = people.filter((e)=>e<=limit/2)

    underHalf.forEach((e,i)=>{
       result =  result+e
        if(result==limit){
            result = 0 
            cnt++
        }else if(result >limit){
            result = e
            cnt++
        }else if(i==underHalf.length-1){
            if(result>0) cnt++
        }
    })
    return cnt + overHalf.length
}
// 불가능한 케이스
// 보트는 두 명만 태울 수 있음
// overhalf는 무조건 한 명만 탄다는 가정 << 51(over) 49(under)인데 가함
// 투 포인터 left right 로직을 써야한다고함


// 50 50 40 40 30 10 

// 10 30 40 40 50 50 
// 10 + 30 
// 40 + 40 
// 80 + 40 result = 40 count ++
// 40 +50 
// 90 50  result 50 count
// 50  count++