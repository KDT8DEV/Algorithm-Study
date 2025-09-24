// 선분 3개가 평행하게 놓여 있습니다. 
// 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

/*나의 풀이*/
// 각 선분의 end값의 최솟값 - start값의 최대값 구해 교집합의 길이를 구한다.
// ab, bc, ac의 교집합을 구하면 중복으로 2번 계산하게 된다.
// 중복으로 2번 계산한 값을 빼준다.
/* 공부할 것 : 2차원배열 정렬, 2차원배열 요소 꺼내기, Math.min, Math.max 함수 */
function solution(lines) {
    let answer = 0
    let minus = 0
    // lines 2차원배열을 행으로 오름차순 정렬
    lines.sort((a,b) => a[0] - b[0]);
    
    // lines 2차원배열 요소 꺼내기
    let a1 = lines[0][0]
    let a2 = lines[0][1]
    let b1 = lines[1][0]
    let b2 = lines[1][1]
    let c1 = lines[2][0]
    let c2 = lines[2][1]
    
    // ab 교집합
    let ab = Math.min(a2, b2) - Math.max(a1, b1)
    if(ab>0) answer += ab
    
    // bc 교집합
    let bc = Math.min(b2, c2) - Math.max(b1, c1)
    if(bc>0) answer += bc
    
    // ac 교집합
    let ac =  Math.min(a2, c2) - Math.max(a1, c1)
    if(ac>0) answer += ac
    
    // 중복 빼주기(*2)
    let abc = (Math.min(a2,b2,c2) - Math.max(a1,b1,c1))
    if(abc>0) minus += abc*2
    return answer-minus
}

/*1차 시도 실패*/
// lines의 배열을 먼저 정렬해준 다음, 일일히 각 선분의 end값과 start값을 비교하려 하였다.
// 그러나 경우의 수가 많아지면서 조건을 만족할 수 없는 경우가 생기면서 정답률이 60%밖에 되지 않았다.
// 실패
function solution(lines) {
    let answer = 0
    let minus = 0
    // lines 2차원배열을 행으로 오름차순 정렬
    lines.sort((a,b) => a[0] - b[0]);
    
    // lines 2차원배열 요소 꺼내기
    let a1 = lines[0][0]
    let a2 = lines[0][1]
    let b1 = lines[1][0]
    let b2 = lines[1][1]
    let c1 = lines[2][0]
    let c2 = lines[2][1]
    // a의 end랑 b의 start
    answer += (a2 > b1 && b2 > a2) ? (a2 - b1) : 0
    // answer += (a2 > b1 && b2 <= a2) ? (b2 - b1) : 0
    
    // a의 end랑 c의 start를 비교
    // answer += (a2 > c1 && c2 > a2) ? (a2 - c1) : 0
    if(a2 > c1 && c2 > a2){
        if(a2 - b1 > a2 - c1){
           answer += (a2 - b1)
           minus = (a2 - c1)
        }
        else{
            answer += (a2 - c1)
            minus = (a2 - b1)
        }
    }
    else if(a2 > c1 && c2 <= a2){
        answer += (c2 - c1)
    }
    
    // b의 end랑 c의 start를 비교
    answer += (b2 > c1 && c2 > b2) ? (b2 - c1) : 0
    // answer += (b2 > c1 && c2 <= b2) ? (b2 - b1) : 0
    
    return answer
}