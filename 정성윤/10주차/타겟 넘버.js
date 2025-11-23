function solution(numbers, target) {
    var answer = 0;
    function dfs(index,currentnumber){
        if(index==numbers.length){
            if(currentnumber==target){
                answer+=1
            }
            return;
        }
        dfs(index+1,currentnumber+numbers[index])
        dfs(index+1,currentnumber-numbers[index])   
    }
    dfs(0,0)
    return answer;
}

console.log(solution([1, 1, 1, 1, 1],3));