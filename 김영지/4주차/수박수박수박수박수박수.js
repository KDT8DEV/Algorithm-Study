/**
 * 문제 설명
 */
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

/**
 * 제한 사항
 */
// n은 길이 10,000이하인 자연수입니다.

/**
 * 나의 풀이
 */
function solution(n) {
    var arr = Array(n)
    for(let i =0;i<n;i++){
        if(i%2 == 0)
            arr.push("수")
        else
            arr.push("박")
    }
    
    return arr.join("")
}

/**
 * 다른 사람 풀이
 */
// 1) repeat 함수로 '수박'을 n/2번 반복한 후, n이 홀수면 '수'를 한번 더한다.
var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// 2) repeat을 n번할 후 slice로 0인텍스부터 n인덱스 전까지 자른 문자열을 반환한다.
const waterMelon = n => "수박".repeat(n).slice(0,n);