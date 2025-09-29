function solution(nums) {
    let map=new Map //객체
    nums.forEach(ele=>{
        map.set(ele,(map.get(ele)||0)+1)
    })
    num=Math.floor(nums.length/2)
    return map.size>num?num:map.size
    
}

console.log(solution([3,3,3,2,2,4]))