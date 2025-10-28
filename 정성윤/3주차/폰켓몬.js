function solution(nums) {
    var answer = 0;
    setnums = new Set(nums)
    numslength = Math.floor(nums.length/2)
    answer = Math.min(numslength,setnums.size)
    return answer;
}