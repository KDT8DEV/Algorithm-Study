/*
 * 문제: 붕대 감기
 *
 * 문제 설명:
 * 게임 캐릭터가 붕대 감기 기술을 사용해 체력을 회복합니다.
 * - t초 동안 붕대를 감으면 1초마다 x만큼 회복
 * - t초 연속 성공하면 y만큼 추가 회복
 * - 최대 체력을 초과하지 않음
 * - 공격받으면 기술 취소, 연속 성공 초기화
 * - 체력이 0 이하가 되면 사망 (더 이상 회복 불가)
 *
 * 제한사항:
 * - 1 ≤ t(시전 시간) ≤ 50
 * - 1 ≤ x(초당 회복량) ≤ 100
 * - 1 ≤ y(추가 회복량) ≤ 100
 * - 1 ≤ health(최대 체력) ≤ 1,000
 * - 1 ≤ attacks의 길이 ≤ 100
 * - 1 ≤ 공격 시간 ≤ 1,000
 * - 1 ≤ 피해량 ≤ 100
 *
 * 입출력 예:
 * [5, 1, 5] | 30 | [[2, 10], [9, 15], [10, 5], [11, 5]] | 5
 * [3, 2, 7] | 20 | [[1, 15], [5, 16], [8, 6]] | -1
 * [4, 2, 7] | 20 | [[1, 15], [5, 16], [8, 6]] | -1
 * [1, 1, 1] | 5 | [[1, 2], [3, 2]] | 3
 */

// 모든 공격이 끝난 직후 남은 체력을 return
// 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1 return
function solution(bandage, health, attacks) {
  // t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복
  // t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복
  // 현재 체력이 최대 체력보다 커지는 것은 불가능
  const [t, x, y] = bandage; // [시전 시간, 초당 회복량, 추가 회복량]
  let currentHealth = health;
  let currentTime = 0;

  // [공격 시간, 피해량]
  for (const [attackTime, damage] of attacks) {
    let diff = attackTime - currentTime - 1; // 공격과 공격 사이에 몇 턴동안 붕대를 감을 수 있을지 계산
    console.log('diff', diff);

    if (currentHealth > health) currentHealth = health;
    currentHealth -= damage;
    if (currentHealth <= 0) return -1;
    currentTime = attackTime;
  }
  return currentHealth;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ]),
); // 5
// console.log(
//   solution([3, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
//   ]),
// ); // -1
// console.log(
//   solution([4, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
//   ]),
// ); // -1
// console.log(
//   solution([1, 1, 1], 5, [
//     [1, 2],
//     [3, 2],
//   ]),
// ); // 3
