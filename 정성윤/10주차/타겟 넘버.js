function solution(numbers, target) {
    var answer = 0;
    function dfs(index,currentnumber){
        if(index==numbers.length){//다돌고
            if(currentnumber==target){ //타겟넘버가 나오면 +1
                answer+=1
            }
            return;
        }
        dfs(index+1,currentnumber+numbers[index]) //+
        dfs(index+1,currentnumber-numbers[index]) //- 두가지 재귀로 돌린다
    }
    dfs(0,0)
    return answer;
}

console.log(solution([1, 1, 1, 1, 1],3));