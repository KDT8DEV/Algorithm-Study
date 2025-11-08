function solution(numbers, hand) {
    let answer = "";
    let leftPos = [3, 0];  // '*' 위치
    let rightPos = [3, 2]; // '#' 위치

    const getPos = (num) => {
        const index = num === 0 ? 10 : num - 1;
        return [Math.floor(index / 3), index % 3];
    };

    for (let num of numbers) {
        const pos = getPos(num);

        if ([1, 4, 7].includes(num)) {
            answer += 'L';
            leftPos = pos;
        } else if ([3, 6, 9].includes(num)) {
            answer += 'R';
            rightPos = pos;
        } else {
            const leftDist = Math.abs(leftPos[0] - pos[0]) + Math.abs(leftPos[1] - pos[1]);
            const rightDist = Math.abs(rightPos[0] - pos[0]) + Math.abs(rightPos[1] - pos[1]);

            if (leftDist < rightDist) {
                answer += 'L';
                leftPos = pos;
            } else if (rightDist < leftDist) {
                answer += 'R';
                rightPos = pos;
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    rightPos = pos;
                } else {
                    answer += 'L';
                    leftPos = pos;
                }
            }
        }
    }

    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
 

// 1  2  3
// 4  5  6
// 7  8  9
// 11 12 13d


// 1  2  3
// 11 12 13
// 21 22 23
// 31 32 33