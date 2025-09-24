/**
 * 문제설명
 */
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

/**
 * 나의 풀이
 */
// 매개변수.toStirng()으로 문자열 변환
// 스프레드연산자[...변수]로 배열 arr에 넣기
// arr 반복문 돌려서 요소값 sum 구하기
function solution(n)
{
    let strN = n.toString();

    let arr = [...strN];

    let sum = 0;
    arr.forEach((a)=>{
        sum += Number(a);
    })
    return sum;
}

/**
 * 다른 사람 풀이
 */
// toString() 대신 n+""
// 스프레드연산자 대신 변수.split("")
// 반복문 대신 reduce 함수. reduce함수에 대해 고민해볼 것
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}