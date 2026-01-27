// 공통문제
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
//  정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// https://school.programmers.co.kr/learn/courses/30/lessons/120848

solution = (n, nfac = 1) => {
  for (let i = 1; i < 11; i++) {
    if (nfac > n) {
      return i - 1;
    } else if (nfac == n) {
      return i;
    } else {
      nfac = nfac * (i + 1);
    }
  }
};

// 해설
solution = (n, nfac = 1) => {
  //nfac= 다음 팩토리얼의 값
  for (let i = 1; i < 11; i++) {
    if (nfac > n) {
      // 다음 팩토리얼 값이 n보다 크면
      return i - 1; // 그 전 숫자가 최대값
    } else if (nfac == n) {
      // 같으면 똑떨어지니까
      return i; // 현재 숫자가 최대값
    } else {
      // 아무것도아니면
      nfac = nfac * (i + 1); // 다음 팩토리얼로 넘어갑시다
    }
  }
};

solution = (n, nfac = 1) => {
  for (let i = 1; i <= 11; i++) {
    if (nfac <= n) {
      nfac = nfac * (i + 1);
    } else return i - 1;
  }
};

// 같으면 멀 리턴하느거임?
// 같으면 끝나면 안됨 << ??
// i=1
// => nfac 2
// i=2
// => nfac 6
// i = 3
// nfac=6 같음
// => nfac 24
// 아하;;;;;;;;;;헐 맞네
// i=4
// => else i-1
// 개열받음
// 코드가 개열받네
