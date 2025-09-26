/**
 * 문제 설명
 */
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 
// 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
// A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 
// 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

/**
 * 제한 사항
 */
// 0 < A의 길이 = B의 길이 < 100
// A, B는 알파벳 소문자로 이루어져 있습니다.

/**
 * 나의 풀이
 */
// 조건이 맞지 않을 때까지 while문을 돌린다.
// 스프레드 연산자로 A를 배열화 한 후 pop() 함수로 문자를 하나씩 뺀다
// join으로 문자열 바꾼 후 하나 뺀 char에 더한다.
// 배열에 재할당 해주고 cnt를 올린다.
function solution(A, B) {
    const length = A.length
    var char = ""
    var arrA = [...A];
    let cnt = 0
    
    if(A !== B){
        while(B !== char){
            char = arrA.pop()
            char += arrA.join("");
            arrA = [...char]
            cnt++
            if(length === cnt){
                cnt = -1
                break
            }
        }
    }
    return cnt;
}


/**
 * 더 효율적인 풀이
 */
// *동작 원리
// 예: A = "hello", B = "ohell"
// A + A = "hellohello"
// "ohell"은 "hellohello"의 인덱스 4에서 시작 → 4번 밀면 맞음.
function solution(A, B) {
    if (A === B) return 0;

    // A를 두 번 이어붙이면 모든 회전 경우가 포함됨
    let doubled = A + A;

    // B가 포함된다면 그 시작 인덱스가 회전 횟수
    let idx = doubled.indexOf(B);

    return idx === -1 ? -1 : idx;
}


// ==============테스트======================

// const A = "hello"
// const B = "lohel"
// const length = A.length
// var char = ""
// var arrA = [...A];
// let cnt = 0

// console.log(arrA)
// char = arrA.pop()
// console.log(char)
// console.log(arrA)
// console.log(arrA.join(""))

// char += arrA.join("");

// console.log(char)
// console.log('-------')
// arrA = [...char]
// console.log(arrA)
// char = arrA.pop()
// console.log(char)
// console.log(arrA)
// console.log(arrA.join(""))

// char += arrA.join("");

// console.log(char)

// if(A !== B){
//     while(B !== char){
//         char = arrA.pop()
//         char += arrA.join("");
//         arrA = [...char]
//         cnt++
//         if(length === cnt){
//             cnt = -1
//             break
//         }
//     }
// }

// console.log(cnt)