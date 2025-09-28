//9/15
// while 팩토리얼 해서 
// 커지면 
// 탈출 하고 i-1

function solution(n) {
    let factorial = 1;
    let i = 1;

    while (factorial * i <= n) {
        factorial = factorial * i;
        i++;
    }

    return i - 1; 
}