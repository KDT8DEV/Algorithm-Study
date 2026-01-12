/* 프로그래머스 사이트를 운영하는 그렙에서는 재택근무와 함께 출근 희망 시각을 자유롭게 정하는 유연근무제를 시행하고 있습니다. 제도 정착을 위해 오늘부터 일주일 동안 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게 상품을 주는 이벤트를 진행하려고 합니다.

직원들은 일주일동안 자신이 설정한 출근 희망 시각 + 10분까지 어플로 출근해야 합니다. 예를 들어 출근 희망 시각이 9시 58분인 직원은 10시 8분까지 출근해야 합니다. 단, 토요일, 일요일의 출근 시각은 이벤트에 영향을 끼치지 않습니다. 직원들은 매일 한 번씩만 어플로 출근하고, 모든 시각은 시에 100을 곱하고 분을 더한 정수로 표현됩니다. 예를 들어 10시 13분은 1013이 되고 9시 58분은 958이 됩니다.

당신은 직원들이 설정한 출근 희망 시각과 실제로 출근한 기록을 바탕으로 상품을 받을 직원이 몇 명인지 알고 싶습니다.

직원 n명이 설정한 출근 희망 시각을 담은 1차원 정수 배열 schedules, 직원들이 일주일 동안 출근한 시각을 담은 2차원 정수 배열 timelogs, 이벤트를 시작한 요일을 의미하는 정수 startday가 매개변수로 주어집니다. 이때 상품을 받을 직원의 수를 return 하도록 solution 함수를 완성해주세요. */

function solution(schedules, timelogs, startday) {
  // 직원 수
  const n = schedules.length;
  let count = 0;

  // 시간(예: 958)을 분 단위로 바꿔서 더하거나 비교하기 쉬운 형태로 변환
  function toMinutes(hhmm) {
    const h = Math.floor(hhmm / 100);
    const m = hhmm % 100;
    return h * 60 + m;
  }

  // schedules[i]에 minutes를 더한 뒤 다시 HHMM 형태로 반환 (필요는 아니지만 가독성 위해 유지)
  function addMinutesAsHHMM(hhmm, minutes) {
    const total = toMinutes(hhmm) + minutes;
    const h = Math.floor(total / 60);
    const m = total % 60;
    return h * 100 + m;
  }

  // 주어진 startday에서 j번째 날의 요일(1..7) 계산
  function dayOf(startday, j) {
    return ((startday - 1 + j) % 7) + 1; // 1..7
  }

  for (let i = 0; i < n; i++) {
    // 직원 i의 허용 마감 시간(HHMM) = 희망시간 + 10분
    const deadline = addMinutesAsHHMM(schedules[i], 10);

    let ok = true;
    for (let j = 0; j < 7; j++) {
      const weekday = dayOf(startday, j); // 1~7
      // 토요일(6), 일요일(7)은 이벤트에 영향 없음
      if (weekday === 6 || weekday === 7) continue;

      const actual = timelogs[i][j];
      // 실제 출근 시간이 마감 시간 이내인지 확인
      if (actual > deadline) {
        ok = false;
        break;
      }
    }

    if (ok) count++;
  }

  return count;
}
