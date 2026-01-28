function solution(start_num, end_num) {
    let length = end_num-start_num
    let result = []
    for(let i=0;i<=length;i++){
        result.push(start_num);
        start_num++
    }
    return result
}

// start_num부터 end_num까지의 모든 정수를 포함하는 배열을 반환하는 함수