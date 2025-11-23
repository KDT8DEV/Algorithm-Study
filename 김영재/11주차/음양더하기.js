function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => {
        if (signs[idx] == true) {
            return acc + cur
        }
        else {
            return acc - cur
        }
    }, 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
