//현재 퍼즐 난이도 diff
//현재 퍼즐의 소요 시간을 time_cur,
//  이전 퍼즐의 소요 시간을 time_prev,
//  당신의 숙련도를 level
// 전체 제한 시간 limit
//. 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 합니다. 난이도, 
// 소요 시간은 모두 양의 정수며, 숙련도도 양의 정수여야 합니다.
function getTotalTime(diffs, times, level) {
    let totalTime = 0n; // BigInt 사용 (overflow 방지)

    for (let i = 0; i < diffs.length; i++) {
        const solveTimes = BigInt(diffs[i] - level);

        if (solveTimes <= 0n) {
            totalTime += BigInt(times[i]);
            continue;
        }

        if (i === 0) {
            totalTime += BigInt(times[i]) * solveTimes + BigInt(times[i]);
        } else {
            totalTime += (BigInt(times[i - 1]) + BigInt(times[i])) * solveTimes + BigInt(times[i]);
        }
    }

    return totalTime;
}

function solution(diffs, times, limit) {
    let start = 1;
    let end = 100000;
    let answer = 0;

    const bigLimit = BigInt(limit);

    while (start <= end) {
        const level = Math.floor((start + end) / 2);
        const totalTime = getTotalTime(diffs, times, level);

        if (totalTime <= bigLimit) {
            answer = level;
            end = level - 1;
        } else {
            start = level + 1;
        }
    }

    return answer;
}
console.log(solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012));
console.log(solution([1, 5, 3], [2, 4, 7], 30));

