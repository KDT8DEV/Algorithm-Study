function solution(k, score) {
    return score.map((_, idx) => {
        return score.slice(0, +idx + 1).sort((a, b) => b - a).slice(0,k).sort((a, b) => a - b)[0]
    });
    //배열을 순회하며 1일차 까지, 2일차 까지, ...n일차 까지로 잘라서 그 날짜의 점수들 중 상위 K개만 잘라와서 가장 작은 점수를 반환
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log([10, 100, 20, 150, 1, 100, 200].slice(0, 1));
