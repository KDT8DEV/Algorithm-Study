// https://school.programmers.co.kr/learn/courses/30/lessons/120922
function solution(M, N) {
    return (M-1)+((M)*(N-1))
}

// M-1 : 가로로 자르는 횟수
// (M)*(N-1) : 세로로 자르는 횟수
// 총 자르는 횟수를 리턴한다.

function solution2(M, N) {
    return M*N-1;
}
// 전체 조각 수 - 1 이 자르는 횟수와 같다.
// M*N개의 조각을 만들기 위해서는 M*N-1번 자르면 된다.