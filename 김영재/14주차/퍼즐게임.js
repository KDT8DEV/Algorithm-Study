//현재 퍼즐 난이도 diff
//현재 퍼즐의 소요 시간을 time_cur,
//  이전 퍼즐의 소요 시간을 time_prev,
//  당신의 숙련도를 level
// 전체 제한 시간 limit
//. 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 합니다. 난이도, 
// 소요 시간은 모두 양의 정수며, 숙련도도 양의 정수여야 합니다.

//단순탐색은 너무 오래 걸리며 비효율적임

//이진 탐색
// - 탐색 범위의 **중간값(mid)**을 확인
// - 찾고자 하는 값과 비교
// - 같으면 → 찾기 성공
// - 작으면 → 왼쪽 절반만 탐색
// - 크면 → 오른쪽 절반만 탐색
// - 이 과정을 반복해서 탐색 범위를 줄여감

//퍼즐 게임에는 전체 제한 시간 limit가 정해져 있습니다. 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값을 구하려고 합니다. 난이도, 소요 시간은 모두 양의 정수며, 숙련도도 양의 정수여야 합니다.

//숙련도에 따라 문제시간을 계산하는 함수
function getTotalTime(diffs, times, level) { 
    let totalTime = 0n; // BigInt 사용 (overflow 방지)

    for (let i = 0; i < diffs.length; i++) {
        const solveTimes = BigInt(diffs[i] - level);

        if (solveTimes <= 0n) {
            //퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용
            totalTime += BigInt(times[i]);
            continue;
        }

        //문제 난이도가 숙련도보다 클때
        if (i === 0) {
            //첫 문제는 이전 문제가 없음
            totalTime += BigInt(times[i]) * solveTimes + BigInt(times[i]);
        } else {
            //퍼즐을 틀릴 때마다, time_cur만큼의 시간을 사용하며, 
            // 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 합니다
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

