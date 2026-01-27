function solution(a, b) {
    return Number(`${a}${b}`)>=(2*a*b)?Number(`${a}${b}`):2*a*b;
}

// 문제풀이
// 백틱으로 묶은 문자열을 Number 로 변환
// 2ab 와 비교 후 더 큰 값 리턴
