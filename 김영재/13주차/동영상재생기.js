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