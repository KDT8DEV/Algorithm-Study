function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a);
    citations.forEach((item, i) => {
        if (item >= i+1) {
            answer=i+1;
        }
    });
    return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
