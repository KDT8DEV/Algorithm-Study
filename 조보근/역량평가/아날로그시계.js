/* 시침, 분침, 초침이 있는 아날로그시계가 있습니다. 시계의 시침은 12시간마다, 분침은 60분마다, 초침은 60초마다 시계를 한 바퀴 돕니다. 따라서 시침, 분침, 초침이 움직이는 속도는 일정하며 각각 다릅니다. 이 시계에는 초침이 시침/분침과 겹칠 때마다 알람이 울리는 기능이 있습니다. 당신은 특정 시간 동안 알람이 울린 횟수를 알고 싶습니다.

다음은 0시 5분 30초부터 0시 7분 0초까지 알람이 울린 횟수를 세는 예시입니다.

ex1-1.png

가장 짧은 바늘이 시침, 중간 길이인 바늘이 분침, 가장 긴 바늘이 초침입니다.
알람이 울리는 횟수를 세기 시작한 시각은 0시 5분 30초입니다.
이후 0시 6분 0초까지 초침과 시침/분침이 겹치는 일은 없습니다.
ex1-2.png

약 0시 6분 0.501초에 초침과 시침이 겹칩니다. 이때 알람이 한 번 울립니다.
이후 0시 6분 6초까지 초침과 시침/분침이 겹치는 일은 없습니다.
ex1-3.png

약 0시 6분 6.102초에 초침과 분침이 겹칩니다. 이때 알람이 한 번 울립니다.
이후 0시 7분 0초까지 초침과 시침/분침이 겹치는 일은 없습니다.
0시 5분 30초부터 0시 7분 0초까지는 알람이 두 번 울립니다. 이후 약 0시 7분 0.584초에 초침과 시침이 겹쳐서 울리는 세 번째 알람은 횟수에 포함되지 않습니다.

다음은 12시 0분 0초부터 12시 0분 30초까지 알람이 울린 횟수를 세는 예시입니다.

ex2-1.png

알람이 울리는 횟수를 세기 시작한 시각은 12시 0분 0초입니다.
초침과 시침, 분침이 겹칩니다. 이때 알람이 한 번 울립니다. 이와 같이 0시 정각, 12시 정각에 초침과 시침, 분침이 모두 겹칠 때는 알람이 한 번만 울립니다.
ex2-2.png

이후 12시 0분 30초까지 초침과 시침/분침이 겹치는 일은 없습니다.
12시 0분 0초부터 12시 0분 30초까지는 알람이 한 번 울립니다.

알람이 울리는 횟수를 센 시간을 나타내는 정수 h1, m1, s1, h2, m2, s2가 매개변수로 주어집니다. 이때, 알람이 울리는 횟수를 return 하도록 solution 함수를 완성해주세요. */

function solution(h1, m1, s1, h2, m2, s2) {
  // 특정 시각을 초 단위로 변환 (0시 0분 0초 기준)
  const toSeconds = (h, m, s) => h * 3600 + m * 60 + s;

  // 특정 시각(초)까지 알람이 울린 총 횟수를 계산
  const countAlarms = (totalSeconds) => {
    // 초침과 분침이 겹치는 횟수: 1시간에 59번
    let minuteAlarms = (totalSeconds * 59) / 3600;

    // 초침과 시침이 겹치는 횟수: 12시간에 719번
    let hourAlarms = (totalSeconds * 719) / 43200;

    let count = Math.floor(minuteAlarms) + Math.floor(hourAlarms);

    // 0시 또는 12시 정각에는 시침, 분침, 초침이 모두 겹침
    // 이 경우 알람이 2번이 아닌 1번만 울리므로 중복 제거
    if (totalSeconds >= 12 * 3600) {
      // 12시 이상
      count -= 1;
    }
    if (totalSeconds >= 24 * 3600) {
      // 24시 (0시)
      count -= 1;
    }

    return count;
  };

  // 특정 시각에 초침이 시침 또는 분침과 정확히 겹쳐있는지 확인
  const isAlarmTime = (h, m, s) => {
    // 0시 0분 0초 또는 12시 0분 0초
    if ((h === 0 || h === 12) && m === 0 && s === 0) {
      return true;
    }

    // 각 바늘의 각도 계산 (도 단위)
    const secondAngle = s * 6; // 초침: 1초당 6도
    const minuteAngle = (m * 60 + s) * 0.1; // 분침: 1초당 0.1도
    const hourAngle = ((h % 12) * 3600 + m * 60 + s) * 0.00833333; // 시침: 1초당 1/120도

    // 각도 차이 계산 (360도 순환 고려)
    const diffMinute = Math.abs(secondAngle - minuteAngle);
    const diffHour = Math.abs(secondAngle - hourAngle);

    // 겹침 판정 (오차 범위 0.01도 이내 또는 359.99도 이상)
    const overlapMinute = diffMinute < 0.01 || diffMinute > 359.99;
    const overlapHour = diffHour < 0.01 || diffHour > 359.99;

    return overlapMinute || overlapHour;
  };

  const startSeconds = toSeconds(h1, m1, s1);
  const endSeconds = toSeconds(h2, m2, s2);

  // 종료 시각까지의 알람 횟수 - 시작 시각까지의 알람 횟수
  let answer = countAlarms(endSeconds) - countAlarms(startSeconds);

  // 시작 시각에 이미 겹쳐있으면 그 순간도 포함
  if (isAlarmTime(h1, m1, s1)) {
    answer += 1;
  }

  return answer;
}

// 테스트 케이스
console.log("=== 아날로그 시계 알람 테스트 ===\n");

const testCases = [
  {
    h1: 0,
    m1: 5,
    s1: 30,
    h2: 0,
    m2: 7,
    s2: 0,
    expected: 2,
    desc: "0시 5분 30초 ~ 0시 7분 0초",
  },
  {
    h1: 12,
    m1: 0,
    s1: 0,
    h2: 12,
    m2: 0,
    s2: 30,
    expected: 1,
    desc: "12시 0분 0초 ~ 12시 0분 30초 (정각)",
  },
  {
    h1: 0,
    m1: 6,
    s1: 1,
    h2: 0,
    m2: 6,
    s2: 6,
    expected: 0,
    desc: "0시 6분 1초 ~ 0시 6분 6초",
  },
  {
    h1: 11,
    m1: 59,
    s1: 30,
    h2: 12,
    m2: 0,
    s2: 0,
    expected: 1,
    desc: "11시 59분 30초 ~ 12시 0분 0초",
  },
  {
    h1: 11,
    m1: 58,
    s1: 59,
    h2: 11,
    m2: 59,
    s2: 0,
    expected: 1,
    desc: "11시 58분 59초 ~ 11시 59분 0초",
  },
  {
    h1: 1,
    m1: 5,
    s1: 5,
    h2: 1,
    m2: 5,
    s2: 6,
    expected: 2,
    desc: "1시 5분 5초 ~ 1시 5분 6초",
  },
  {
    h1: 0,
    m1: 0,
    s1: 0,
    h2: 23,
    m2: 59,
    s2: 59,
    expected: 2852,
    desc: "0시 0분 0초 ~ 23시 59분 59초 (하루 전체)",
  },
];

let passCount = 0;
testCases.forEach((test, index) => {
  const result = solution(test.h1, test.m1, test.s1, test.h2, test.m2, test.s2);
  const pass = result === test.expected;

  console.log(`테스트 ${index + 1}: ${test.desc}`);
  console.log(
    `  예상: ${test.expected}, 실제: ${result} ${pass ? "✅" : "❌"}`
  );

  if (pass) passCount++;
});

console.log(`\n=== 결과: ${passCount}/${testCases.length} 통과 ===`);
