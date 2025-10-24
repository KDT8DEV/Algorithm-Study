// 문제 설명
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
// s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;

    // 0 갯수
    zeroCnt = s.split('0').length -1;
    while(s !== "1"){
        // 1 갯수
        let oneCnt = s.split('1').length -1;
        // 1 갯수를 이진법으로 나타내기
        s = oneCnt.toString(2);
        // 이진변환 횟수
        cnt++;
        // 뺄 0의 갯수 누적 카운트
        zeroCnt += s.split('0').length -1;
    }
    return [cnt, zeroCnt];
}

// 다른 사람 풀이
// s.match(/0/g)||[]) : s문자열에 0 포함이거나 없을 경우 빈 배열 
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

//==============================연습장========================================//
// let s = "110010101001"	// [3,8]
// let s = "01110"	        // [3,3]
// let cnt = 0;
// let zeroCnt = 0;

// // // 0 갯수
// // let zeroCnt = s.split('0').length -1;
// // console.log(zeroCnt);
// // // 1 갯수
// // let oneCnt = s.split('1').length -1;
// // console.log(oneCnt);
// // // 1 갯수를 이진법으로 나타내기
// // let newS = oneCnt.toString(2);
// // console.log(oneCnt.toString(2));
// // // 새로운 s 0 갯수
// // zeroCnt = newS.split('0').length -1;
// // console.log(zeroCnt);

// zeroCnt = s.split('0').length -1;
// while(s !== "1"){
//     // 1 갯수
//     let oneCnt = s.split('1').length -1;
//     // 1 갯수를 이진법으로 나타내기
//     s = oneCnt.toString(2);
//     // 이진변환 횟수
//     cnt++;
//     // 뺄 0의 갯수 누적 카운트
//     zeroCnt += s.split('0').length -1;
// }
// console.log(cnt, zeroCnt);