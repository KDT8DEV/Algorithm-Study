// 문자들이 담겨있는 배열 arr가 주어집니다. 
// arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 200
// arr의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.

// 내 풀이
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// arr.join([separator]) : separator는 매개변수로, 배열의 각 요소를 구분할 문자열이다. 생략하면 배열의 원소들의 쉼표로 구분.
function solution(arr) {
    var answer = '';
    answer = arr.join("");
    return answer;
}

//====================================================================
// 다른 사람 풀이 1)
// 배열을 forEach 돌려서 각 요소를 answer 변수에 붙여 표현
function solution(arr) {
    var answer = '';
    arr.forEach(str=>{
        answer += str;
    })
    return answer;
}

// 다른 사람 풀이 2)
// for문 돌려서 각 요소를 변수에 붙여 표현
function solution(arr) {
    var answer = '';

    for(let i of arr){
        answer += i;
    }

    return answer;
}