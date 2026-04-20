function solution(s, skip, index) {
  let answer = '';
  const skipSet = new Set(skip);

  for (let char of s) {
    let count = 0;
    let current = char;

    while (count < index) {
      current = String.fromCharCode(current.charCodeAt(0) + 1);

      if (current > 'z') current = 'a';

      if (!skipSet.has(current)) {
        count++;
      }
    }

    answer += current;
  }

  return answer;
}

// 풀이
// * skip을 Set으로 만들어서 탐색 속도 높이기
// 아스키코드로 변환하여 1씩 증가시키면서 skip에 없으면 카운트
