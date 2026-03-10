function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n].localeCompare(b[n]);
  });
}

// 문제풀이
// n번째 문자로 정렬
// n번째 문자가 같으면 문자열 자체로 사전순 정렬

// 다른사람
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]),
  );
}
