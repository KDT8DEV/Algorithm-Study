// 문자열 my_string과 정수 k가 주어질 때, 
// my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

/*나의 풀이*/
function solution(my_string, k) {
    var answer = '';
    for(let i =0; i<k; i++){
        answer += my_string;
    }
    return answer;
}

//===============================
// 다른 사람 풀이 1)
// repeat 함수 : 특정 문자열을 원하는만큼 반복한 문자열을 얻고싶을 때 사용
// str.repeat(cnt); // str : 반복할 문자열, cnt : 반복횟수
function solution(my_string, k) {
    return my_string.repeat(k)
}
