// 10초 전 prev
// 10초 미만이면 0초로
// 10초 후 next
// 10초 미만 영상마지막
// 오프닝 건너뛰기
// op_start op_end 사이이면 자동으로 op_end로
// video_len : 동영상길이
// pos : 기능이 수행되기 직전 재생 위치
// op_start, op_end
//command 사용자 입력
// 입력 끝난 후 위치 mm:ss
//분, 초가 한 자리일 경우 0을 붙여 두 자리로 나타냅니다.

function solution(video_len, pos, op_start, op_end, commands) {
    const toSec = (t) => {
        const [m, s] = t.split(':').map(Number);
        return m * 60 + s;
    };

    const toStr = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    };

    const video = toSec(video_len);
    let current = toSec(pos);
    const opS = toSec(op_start);
    const opE = toSec(op_end);

    const skipOpening = () => {
        if (current >= opS && current <= opE) current = opE;
    };

    skipOpening();

    for (const cmd of commands) {
        if (cmd === 'prev') {
            current -= 10;
            if (current < 0) current = 0;
        } else if (cmd === 'next') {
            current += 10;
            if (current > video) current = video;
        }
        skipOpening();
    }

    return toStr(current);
}
