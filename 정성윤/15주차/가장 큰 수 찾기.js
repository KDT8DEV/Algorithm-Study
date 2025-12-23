function solution(array) {
    var answer = [];
    answer.push(Math.max(...array))
    for(let i=0; i<array.length; i++){
        if(array[i]==Math.max(...array)){
            answer.push(i)
        }
    }

    return answer;
}

// function solution(array) {
//     const maxValue = Math.max(...array); // 배열에서 최댓값 추출
//     const index = array.indexOf(maxValue); // 최댓값의 인덱스 찾기
//     return [maxValue, index]; // [최댓값, 인덱스] 반환
// }
