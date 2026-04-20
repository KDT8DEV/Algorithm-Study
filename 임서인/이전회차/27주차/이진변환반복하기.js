function solution(s) {
  let count = 0;
  let removedZeros = 0;

  while (s !== '1') {
    // 0의 개수 세고 제거
    const zeros = s.split('').filter((c) => c === '0').length;
    removedZeros += zeros;

    // 1의 개수를 2진수 문자열로 변환
    const ones = s.length - zeros;
    s = ones.toString(2);

    count++;
  }

  return [count, removedZeros];
}

// 풀이
// s가 "1"이 될 때까지 반복:

//  0 제거 → 제거된 0의 수 누적
//  남은 1의 개수(c)를 2진법 문자열로 변환
//  변환 횟수 +1

// // 테스트
// console.log(solution('110010101001')); // [3, 8]
// console.log(solution('01110')); // [3, 3]
// console.log(solution('1111111')); // [4, 1]
