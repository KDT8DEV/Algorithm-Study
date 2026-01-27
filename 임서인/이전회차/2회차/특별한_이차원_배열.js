// https://school.programmers.co.kr/learn/courses/30/lessons/181833
// 이차원배열 연습용 문제,,, 처음 겪어보는 문제였다,,,아주 유익하군,,

// 문제 설명
// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

// 첫 트라이
solution = (n) => {
  let arr = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = 1;
      i++;
    }
  }
  return arr;
};
// 물론 성공임 하지만 더 클레-바 한 방법이 잇섯다

// 2트
solution = (n) => {
  let arr = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    arr[i][i] = 1;
  }
  return arr;
};
// 진짜 개열받음 대각선이니까 포문 하나 쓰는구나 라는 생각을~~하는 너희들 아주 킹받아

// 마음에 드는 다른 사람 코드
solution = (n) => {
  return Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill(n)
        .map(($, j) => (i === j ? 1 : 0))
    );
};

// 가독성이 안조아서 풀어봄
solution = (n) => {
  let arr1 = Array(n).fill(),
    arr2 = Array(n).fill(); // arr1 arr2 배열 초기화
  return arr1.map((_, i) => {
    return arr2.map(($, j) => {
      return i === j ? 1 : 0;
    });
  });
};
