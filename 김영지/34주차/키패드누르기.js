function solution(numbers, hand) {
  let answer = [];
  let leftNum = [1, 4, 7];
  let rightNum = [3, 6, 9];

  let keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    11: [3, 0],
    0: [3, 1],
    12: [3, 2],
  };

  let lSide = 11;
  let rSide = 12;

  for (let i = 0; i < numbers.length; i++) {
    let target = numbers[i];
    if (leftNum.includes(target)) {
      answer.push("L");
      lSide = target;
    } else if (rightNum.includes(target)) {
      answer.push("R");
      rSide = target;
    } else {
      let rdist = 0;
      let ldist = 0;
      rdist += Math.abs(keypad[target][0] - keypad[rSide][0]);
      rdist += Math.abs(keypad[target][1] - keypad[rSide][1]);
      ldist += Math.abs(keypad[target][0] - keypad[lSide][0]);
      ldist += Math.abs(keypad[target][1] - keypad[lSide][1]);
      if (ldist > rdist) {
        answer.push("R");
        rSide = target;
      } else if (ldist < rdist) {
        answer.push("L");
        lSide = target;
      } else {
        if (hand == "right") {
          answer.push("R");
          rSide = target;
        } else {
          answer.push("L");
          lSide = target;
        }
      }
    }
  }

  return answer.join("");
}
