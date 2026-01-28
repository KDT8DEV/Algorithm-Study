function solution(box, n) {
  var answer = box.reduce((acc, cur) => {
    return acc * Math.floor(cur / n);
  }, 1);
  return Math.floor(answer);
}

// box 배열의 각 요소를 n으로 나눈 몫을 구하고
// 그 몫들을 모두 곱한 값을 리턴한다.
