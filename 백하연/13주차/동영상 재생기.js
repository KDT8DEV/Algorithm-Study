/**
 * 시뮬레이션 문제
 * @param {string} video_len 동영상의 길이
 * @param {string} pos 기능이 수행되기 직전의 재생위치
 * @param {string} op_start 오프닝 시작 시각
 * @param {string} op_end 오프닝이 끝나는 시각
 * @param {string[]} commands 사용자의 입력
 * @returns 사용자의 입력이 모두 끝난 후 동영상의 위치를 "mm:ss" 형식으로 return
 */

const convertToSeconds = (time) => {
  const [minutes, seconds] = time.split(':');
  return +minutes * 60 + +seconds;
};

function solution(video_len, pos, op_start, op_end, commands) {
  const VIDEO_LENGTH = convertToSeconds(video_len);
  const OP_START = convertToSeconds(op_start);
  const OP_END = convertToSeconds(op_end);
  let position = convertToSeconds(pos);

  // 초기 위치가 오프닝 구간인지 확인
  // 오프닝 건너뛰기 : 현재 재생 위치가 오프닝구간(op_start <= 현재 재생 위치 <= op_end)인 경우, 자동으로 오프닝이 끝나는 위치로 이동
  if (position >= OP_START && position <= OP_END) {
    position = OP_END;
  }

  commands.forEach((command) => {
    // prev 실행
    if (command === 'prev') {
      position -= 10;
    }
    // next 실행
    if (command === 'next') {
      position += 10;
    }

    console.log(`${command} 후: ${position}`);

    // 현재 위치가 10초 미만(음수)인 경우 영상의 처음 위치(0분 0초)로 이동
    if (position < 0) {
      position = 0;
    }
    // 현재 위치가 동영상 길이를 초과하면 영상의 마지막 위치(video_len)로 이동
    if (position > VIDEO_LENGTH) {
      position = VIDEO_LENGTH;
    }
    // 오프닝 구간인지 다시 확인
    if (position >= OP_START && position <= OP_END) {
      console.log(`오프닝 구간! ${OP_END}로 이동`);
      position = OP_END;
    }
  });

  return `${String(Math.floor(position / 60)).padStart(2, '0')}:${String(position % 60).padStart(
    2,
    '0'
  )}`;
}

solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev']); // '13:00'
solution('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next']); // '06:55'
solution('07:22', '04:05', '00:15', '04:07', ['next']); // '04:17'
