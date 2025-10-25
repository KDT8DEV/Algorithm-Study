function solution(food) {
    var answer = '';
    for(i=1;i<food.length;i++){
        if(food[i]%2!=0){
            food[i]--;
        }
        for(j=0;j<food[i]/2;j++){
            answer+=`${i}`
        }
    }
    answer+='0'
    for(i=answer.length-2;i>=0;i--){
        answer+=answer[i]
    }
    return answer;
}
console.log(solution([1, 3, 4, 6]));
