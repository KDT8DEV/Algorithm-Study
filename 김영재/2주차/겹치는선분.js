const solution = (lines) => {
  let answer = 0;
  for (let i = -100; i < 100; i++) { // 좌표 범위 -100 ~ 99
    let count = 0;

    for (let j = 0; j < 3; j++) { //배열 겹침검사
      const [start, end] = lines[j];
      if (i >= start && i < end) {
        count++; //겹침카운트
      }
    }
    if (count >= 2) { //2개이상 겹치면 카운트
      answer++;
    }
  }
  return answer;
  
}

console.log(solution([[1,5],[3,7],[7,10]]))

//     3 4 5 6 7
// 1 2 3 4 5   7 8 9 10

// 0 0 0 1 2 0 0 0...