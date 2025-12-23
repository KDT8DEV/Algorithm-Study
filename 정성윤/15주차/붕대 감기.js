function solution(bandage, health, attacks) {
  // # t: 연속 시전 시간, x: 초당 회복, y: 추가 회복
  const [t, x, y] = bandage;

  let curhealth = health;

  let idx = 0;

  // # 연속 붕대 성공 시간
  let sequence = 0;

  const lastTime = attacks[attacks.length - 1][0];

  for (let time = 1; time <= lastTime; time++) {
    // 공격 시간인지 확인
    if (idx < attacks.length && attacks[idx][0] === time) {
      curhealth -= attacks[idx][1];
      sequence = 0;
      idx++;

      if (curhealth <= 0) 
        return -1;
    } else {
      // # 공격이 없으면
      sequence++;
      curhealth = Math.min(health, curhealth + x); //최대회복제한

      // # 연속 t초 성공 시 보너스 회복 후 sequence 초기화
      if (sequence === t) {
        curhealth = Math.min(health, curhealth + y);
        sequence = 0;
      }
    }
  }

  return curhealth;
}

