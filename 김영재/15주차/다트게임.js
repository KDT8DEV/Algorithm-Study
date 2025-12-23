function solution(dartResult) {
  const scores = [];
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let [_, num, bonus, option] = match;
    num = parseInt(num);

    // 보너스 처리
    if (bonus === "S") num = Math.pow(num, 1);
    else if (bonus === "D") num = Math.pow(num, 2);
    else if (bonus === "T") num = Math.pow(num, 3);

    // 옵션 처리
    if (option === "*") {
      num *= 2;
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
      }
    } else if (option === "#") {
      num *= -1;
    }

    scores.push(num);
  }

  return scores.reduce((a, b) => a + b, 0);
}