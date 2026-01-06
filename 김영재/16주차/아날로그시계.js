function solution(h1, m1, s1, h2, m2, s2) {
  let answer = 0;

  // 시작시간과 끝시간을 초단위로 변환
  let startTime = h1 * 3600 + m1 * 60 + s1;
  let endTime = h2 * 3600 + m2 * 60 + s2;

  // next 기준으로 계산할거니 포함되지 않는 시작시간 00시, 12시 미리 카운팅
  if (startTime === 0 * 3600 || startTime === 12 * 3600) {
    answer += 1;
  }

  while (startTime < endTime) {
    // 시침 1시간 = 30도 -> 1초에 30/3600도 즉, 1/120도 이동
    // 분침 1분 = 6도 -> 1초에 6/60도 즉, 1/10도 이동
    // 초침 1초 = 6도 -> 1초에 6도 이동
    let hCurAngle = (startTime / 120) % 360;
    let mCurAngle = (startTime / 10) % 360;
    let sCurAngle = (startTime * 6) % 360;

    // 다음 위치가 360도가 아닌 0도로 계산되어 카운팅에 포함되지 않는 경우 방지
    let hNextAngle = ((startTime + 1) / 120) % 360;
    if (hNextAngle === 0) hNextAngle = 360;

    let mNextAngle = ((startTime + 1) / 10) % 360;
    if (mNextAngle === 0) mNextAngle = 360;

    let sNextAngle = ((startTime + 1) * 6) % 360;
    if (sNextAngle === 0) sNextAngle = 360;

    if (sCurAngle < hCurAngle && sNextAngle >= hNextAngle) {
      answer += 1;
    }
    if (sCurAngle < mCurAngle && sNextAngle >= mNextAngle) {
      answer += 1;
    }

    // 시침/분침과 동시에 겹쳤을 때 중복카운팅 제외
    if (sNextAngle === hNextAngle && hNextAngle === mNextAngle) {
      answer -= 1;
    }

    startTime += 1;
  }

  return answer;
}