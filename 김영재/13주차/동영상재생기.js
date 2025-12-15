// 1. 10초 전으로 이동: 사용자가 "prev" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 전으로 이동합니다.
//  현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동합니다. 영상의 처음 위치는 0분 0초입니다.
// 2. 10초 후로 이동: 사용자가 "next" 명령을 입력할 경우 동영상의 재생 위치를 현재 위치에서 10초 후로 이동합니다.
//  동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동합니다. 영상의 마지막 위치는 동영상의 길이와 같습니다.
// 3. 오프닝 건너뛰기: 현재 재생 위치가 오프닝 구간(op_start ≤ 현재 재생 위치 ≤ op_end)인 경우
//  자동으로 오프닝이 끝나는 위치로 이동합니다.
function solution(video_len, pos, op_start, op_end, commands) {
  // "mm:ss" → 초 변환
  const toSeconds = str => {
    const [m, s] = str.split(":").map(Number);
    return m * 60 + s;
  };

  // 초 → "mm:ss" 변환
  const toMMSS = sec => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };
  
  const videoLenSec = toSeconds(video_len);
  let posSec = toSeconds(pos);
  const opStartSec = toSeconds(op_start);
  const opEndSec = toSeconds(op_end);

  // 시작 위치가 오프닝 구간이면 바로 점프
  if (posSec >= opStartSec && posSec <= opEndSec) {
    posSec = opEndSec;
  }

  // 명령 처리
  for (const cmd of commands) {
    if (cmd === "prev") {
      posSec = Math.max(0, posSec - 10);
    } else if (cmd === "next") {
      posSec = Math.min(videoLenSec, posSec + 10);
    }

    // 오프닝 구간이면 점프
    if (posSec >= opStartSec && posSec <= opEndSec) {
      posSec = opEndSec;
    }
  }

  return toMMSS(posSec);
}
// 테스트
console.log(solution("34:33", "00:59", "00:55", "02:55", ["next", "prev"])); // "01:09"