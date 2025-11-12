function solution(numbers) {
    var answer = 0;
    let max1 = 0;
    let max2 = 0;
    numbers.sort((a,b)=> a-b)
    max1 = numbers.pop()
    
    max2 = numbers.pop()
    
    return max1 * max2;
}