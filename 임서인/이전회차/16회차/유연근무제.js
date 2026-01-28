function solution(schedules, timelogs, startday) {
  const numberPeople = schedules.length;
  const saturday = (6 - startday + 7) % 7;
  const sunday = (7 - startday + 7) % 7;

  let result = 0;
  for (let person = 0; person < numberPeople; person++) {
    let count = 0;
    // 시간처리
    let hh = Math.floor(schedules[person] / 100);
    let mm = (schedules[person] % 100) + 10;
    if (mm >= 60) {
      hh += 1;
      mm %= 60;
    }
    for (let today = 0; today < 7; today++) {
      if (today == saturday || today == sunday) continue;
      if (timelogs[person][today] > hh * 100 + mm) continue;
      count++;
    }
    if (count == 5) result++;
  }
  return result;
}
// ( startday + day ) % 7 하면 저렇게 복잡하게 안해도 됨

// 토요일과 일요일을 제외한 평일만 추출해서
// HHMM 형태로 된 출퇴근 기록과 비교하여 +10된 시간보다 크면 지각으로 간주
// 5일 모두 지각하지 않은 person 수 반환

// 실패
// 시간에 대한 처리를 안했음
// 1059인 상황이면 +10 했을 때 1109여야 하는데 1069로 처리함
function solution1(schedules, timelogs, startday) {
  const saturday = (6 - startday + 7) % 7;
  const sunday = (7 - startday + 7) % 7;
  const numberPeople = schedules.length;

  let result = 0;
  for (let person = 0; person < numberPeople; person++) {
    let count = 0;
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (dayOfWeek == saturday || dayOfWeek == sunday) continue;
      if (timelogs[person][dayOfWeek] > schedules[person] + 10) continue;
      count++;
    }
    if (count == 5) result++;
  }
  return result;
}

// 무슨 요일에 시작했는지를 계산할 수 있으면 굿
// [0,1,2,3,4,5,6]
// [일,월,화,수,목,금,토]
// let weekend =((6-startday)%7 , (6-startday+1)%7)
// 이대로 하면 음수나올 경우도 있어서 (6-startday+7)%7 하는게 안전
