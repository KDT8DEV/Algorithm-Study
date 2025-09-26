// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 
// solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ str1의 길이 = str2의 길이 ≤ 10
// str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
function solution(str1, str2) {
    var answer = '';
    let arr =[];
    for(let i =0; i<str1.length;i++){
        arr.push(str1[i]);
        arr.push(str2[i]);
    }
    
    answer = arr.join('');
    
    return answer;
}

// 다른 사람 풀이 1)
// spread와 map함수를 이용해 join함수로 묶어 풀었다.
// 알고 있지만 직접 꺼내어 사용하는 것이 힘들다.
function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}

// 다른 사람 풀이 2)
// ``과 ${}를 사용해 템플릿 문자열로 쉽게 표현했다.
function solution(str1, str2) {
    let answer = '';
    for (let i = 0; i < str1.length; i++) {
        answer += `${str1[i]}${str2[i]}`
    }
    return answer;
}