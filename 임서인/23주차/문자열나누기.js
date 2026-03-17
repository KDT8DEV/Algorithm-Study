function solution(s) {
  let count = 0; 
  let same = 0;
  let diff = 0;
  let x = '';

  for (let i = 0; i < s.length; i++) {
    if (same === 0 && diff === 0) {
      x = s[i]; 
    }

    if (s[i] === x) same++;
    else diff++;

    if (same === diff) {
      count++;
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0 || diff !== 0) count++;

  return count;
}

// 문제풀이
// 첫 문자 기준으로 same/diff 개수 카운트
// same === diff 되는 순간 분리
// 분리 횟수 누적 후 카운트 초기화
// 마지막 남은 문자열도 처리