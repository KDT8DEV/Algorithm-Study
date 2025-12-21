/* 문제 설명
 * 어떤 게임에는 붕대 감기라는 기술이 있습니다.
* 붕대 감기는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다.
* t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다.
* 게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.

* 기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다.
* 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.

* 몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어든다.
* 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.

* 붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 최대 체력을 의미하는 정수 health, 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다.
* 모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요.
* 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.
 */

/**
 * 시뮬레이션 알고리즘
 *
 * @param {number[]} bandage 붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열
 * @param {number} health 최대 체력
 * @param {number[][]} attacks 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열
 */
function solution(bandage, health, attacks) {
  const [t, x, y] = bandage; // [시전 시간, 초당 회복량, 추가 회복량]

  let lastAttackTime = attacks[attacks.length - 1][0];
  let currentHealth = health;
  let bandageTime = 0; // 연속 성공 시간
  let attackIndex = 0;

  for (let time = 1; time <= lastAttackTime; time++) {
    if (attackIndex < attacks.length && attacks[attackIndex][0] === time) {
      // 공격 처리 (체력 감소, 연속 성공 시간 초기화)
      currentHealth -= attacks[attackIndex][1];
      bandageTime = 0;
      attackIndex++;
    } else {
      // 공격이 없는 초에는 체력 x만큼 회복(최대 체력 초과 불가)
      currentHealth += x;
      bandageTime++;
      // 연속 성공 시간이 t에 도달하면 y만큼 추가 회복(최대 체력 초과 불가), 연속 성공 시간 초기화
      if (bandageTime === t) {
        currentHealth += y;
        bandageTime = 0;
      }
      if (currentHealth > health) currentHealth = health;
    }
    // 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return
    if (currentHealth <= 0) return -1;
  }
  return currentHealth;
}

// 풀이 1 : attacks.forEach로 모든 공격을 매 초마다 전부 순회 → 1초마다 여러 번 체력 회복/공격이 중복 적용됨 (실패)
/*
function solution(bandage, health, attacks) {
  const [t, x, y] = bandage; // [시전 시간, 초당 회복량, 추가 회복량]

  let lastAttackTime = attacks[attacks.length - 1][0];
  let currentHealth = health; // 현재 체력
  let bandageTime = 0; // 연속 성공 시간

  for (let time = 1; time <= lastAttackTime; time++) {
    attacks.forEach(([attackTime, damage]) => {
      if (attackTime === time) {
        // 공격 처리 (체력 감소, 연속 성공 시간 초기화)
        currentHealth -= damage;
        bandageTime = 0;
      }
      // 공격이 없는 초에는 체력 x만큼 회복(최대 체력 초과 불가)
      currentHealth += x;
      if (currentHealth > health) {
        currentHealth = health;
      }
    });
    // 연속 성공 시간이 t에 도달하면 y만큼 추가 회복(최대 체력 초과 불가), 연속 성공 시간 초기화
    if (bandageTime === t) {
      currentHealth += y;
      if (currentHealth > health) {
        currentHealth = health;
        bandageTime = 0;
      }
    }

    if (currentHealth <= 0) return -1;
    return bandageTime;
  }
}
*/

// console.log(
//   solution([5, 1, 5], 30, [
//     [2, 10], // 공격시간, 피해량
//     [9, 15],
//     [10, 5],
//     [11, 5],
//   ])
// ); // 5
// console.log(
//   solution([3, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
//   ])
// ); // -1
// console.log(
//   solution([4, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
//   ])
// ); // -1
// console.log(
//   solution([1, 1, 1], 5, [
//     [1, 2],
//     [3, 2],
//   ])
// ); // 3

//  다른 사람의 풀이
function other(bandage, health, attacks) {
  const [t, x, y] = bandage; // [시전 시간, 초당 회복량, 추가 회복량]
  let curHealth = health;
  let curTime = 0;

  for (const [attackTime, damage] of attacks) {
    let diffTime = attackTime - curTime - 1;

    curHealth += diffTime * x + Math.floor(diffTime / t) * y;

    if (curHealth > health) curHealth = health;
    curHealth -= damage;
    if (curHealth <= 0) return -1;
    curTime = attackTime;
  }
  return curHealth;
}
