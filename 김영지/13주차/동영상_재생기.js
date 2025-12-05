/**문제 설명
당신은 동영상 재생기를 만들고 있습니다. 당신의 동영상 재생기는 10초 전으로 이동, 
10초 후로 이동, 오프닝 건너뛰기 3가지 기능을 지원합니다. 각 기능이 수행하는 작업은 다음과 같습니다.

10초 전으로 이동: 사용자가 "prev" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 전으로 이동합니다. 
현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동합니다. 영상의 처음 위치는 0분 0초입니다.
10초 후로 이동: 사용자가 "next" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 후로 이동합니다. 
동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동합니다. 영상의 마지막 위치는 동영상의 길이와 같습니다.
오프닝 건너뛰기: 현재 재생 위치가 오프닝 구간(op_start ≤ 현재 재생 위치 ≤ op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동합니다.
동영상의 길이를 나타내는 문자열 video_len, 기능이 수행되기 직전의 재생위치를 나타내는 문자열 pos, 
오프닝 시작 시각을 나타내는 문자열 op_start, 오프닝이 끝나는 시각을 나타내는 문자열 op_end, 
사용자의 입력을 나타내는 1차원 문자열 배열 commands가 매개변수로 주어집니다. 
이때 사용자의 입력이 모두 끝난 후 동영상의 위치를 "mm:ss" 형식으로 return 하도록 solution 함수를 완성해 주세요.

제한사항
video_len의 길이 = pos의 길이 = op_start의 길이 = op_end의 길이 = 5
video_len, pos, op_start, op_end는 "mm:ss" 형식으로 mm분 ss초를 나타냅니다.
0 ≤ mm ≤ 59
0 ≤ ss ≤ 59
분, 초가 한 자리일 경우 0을 붙여 두 자리로 나타냅니다.
비디오의 현재 위치 혹은 오프닝이 끝나는 시각이 동영상의 범위 밖인 경우는 주어지지 않습니다.
오프닝이 시작하는 시각은 항상 오프닝이 끝나는 시각보다 전입니다.
1 ≤ commands의 길이 ≤ 100
commands의 원소는 "prev" 혹은 "next"입니다.
"prev"는 10초 전으로 이동하는 명령입니다.
"next"는 10초 후로 이동하는 명령입니다. */

/**나의 풀이 */
// "총 초" 로 변환해서 연산 → 마지막에 "MM:SS"로 다시 변환
function solution(video_len, pos, op_start, op_end, commands) {
    // "MM:SS" → 총 초로 변환
    const timeToSec = (t) => {
        const [m, s] = t.split(":").map(Number);
        return m * 60 + s;
    };

    // 총 초 → "MM:SS" 형식 문자열
    const secToTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const video = timeToSec(video_len);
    let curr = timeToSec(pos);
    const opS = timeToSec(op_start);
    const opE = timeToSec(op_end);

    // 광고 구간이면 op_end 로 점프
    const skip = () => {
        if (curr >= opS && curr < opE) curr = opE;
    };

    skip(); // 초기 위치 광고 체크

    for (const c of commands) {
        if (c === "prev") curr = Math.max(0, curr - 10);
        else curr = Math.min(video, curr + 10);

        skip(); // 이동할 때마다 광고 체크
    }

    return secToTime(curr);
}

//=============================연습장====================================//
// 접근 방식 : 원래 "MM:SS" → "MMSS" 숫자로 변환해 단순 덧셈/뺄셈으로 풀려고 했지만
// 초 단위 규칙 보장 못함

// let video_len = "34:33";
// let pos = "13:00";
// let op_start = "00:55";
// let op_end = "02:55";
// let commands = ["next", "prev"];	// "13:00"

// let video_len = "07:22";
// let pos = "04:05";
// let op_start = "00:15";
// let op_end = "04:07";
// let commands = ["next"];	// "04:17"

// let video_len = "10:55";
// let pos = "00:05";
// let op_start = "00:15";
// let op_end = "06:55";
// let commands = ["prev", "next", "next"];	// "06:55"


// let videoNew = Number(video_len.replace(":", ""));
// let posNew = Number(pos.replace(":", ""));
// let op_startNew = Number(op_start.replace(":", ""));
// let op_endNew = Number(op_end.replace(":", ""));

// const adjust = (t) => {
//     let m = Math.floor(t / 100);
//     let s = t % 100;
//     if (s >= 60) { m += 1; s -= 60; }
//     if (s < 0) { m -= 1; s += 60; }
//     return m * 100 + s;
// };

// const skip = () => {
//     if(posNew > op_startNew && posNew < op_endNew){
//         posNew = op_endNew;
//         console.log("1: ", posNew);
//     }
// }

// skip();

// for(let c of commands){
//     if(c === "prev"){
//         posNew = adjust(posNew - 10);
//         if(posNew < 0){
//             posNew = 0;
//         }
//         console.log("2: ", posNew);
//     } else if(c === "next"){
//         posNew = adjust(posNew + 10);
//         if(posNew > videoNew){
//             posNew = videoNew;
//         }
//         console.log("3: ", posNew);
//     }

//     skip();
// }

// console.log(posNew);

// posNew = String(posNew).padStart(4, "0");
// console.log(posNew);
// let answer = String(posNew).slice(0,2) + ":" + String(posNew).slice(2,4);
// console.log(answer);