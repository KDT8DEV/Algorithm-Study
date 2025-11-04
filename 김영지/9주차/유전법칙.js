/**문제 설명
멘델은 완두콩을 이용하여 7년간 실험한 결과, 다음과 같은 특별한 법칙을 발견하였습니다.
둥근 완두 순종(RR)을 자가 수분, 즉 같은 유전자끼리 교배할 경우, 다음 세대에 둥근 완두 순종 형질만 나타난다.
주름진 완두 순종(rr)을 자가 수분할 경우, 다음 세대에 주름진 완두 순종 형질만 나타난다.
두 순종을 교배한 잡종(Rr)을 자가 수분할 경우, 다음 세대의 형질은 RR:Rr:rr=1:2:1의 비율로 나타난다. (아래 그림 참조)
image1.PNG
멘델의 법칙을 공부한 진송이는, 직접 완두콩의 자가 수분 실험을 진행했습니다. 진송이의 실험에서 완두콩 한 개를 자가 수분한 결과는 다음과 같습니다.
각 완두콩은 자가 수분해서 정확히 4개의 완두콩 후손을 남긴다.
잡종 완두콩(Rr)은 자가 수분해서 첫째는 RR, 둘째와 셋째는 Rr, 넷째는 rr 형질의 후손을 남긴다.
순종 완두콩(RR, rr)은 자가 수분해서 자신과 같은 형질의 후손을 남긴다.
잡종 완두콩(Rr) 1대부터 시작한 가계도로 그려보면 그림 2와 같습니다.
image2.PNG
진송이는 이러한 완두콩의 자가 수분 실험 결과를 정리하고 싶어합니다. 
하지만, 세대를 거듭할수록, 완두콩의 수가 너무 많아져 모든 가계도를 기록하기 어려워졌습니다. 
진송이는 가계도를 전부 기록하는 것 대신, 완두콩의 세대와 해당 세대에서 몇 번째 개체인지를 알면 형질을 바로 계산하는 프로그램을 만들려 합니다.
각 세대에서 맨 왼쪽 개체부터 첫 번째, 두 번째, 세 번째, ...개체로 나타냅니다. 
예를 들어 그림 2에서 2세대의 네 번째 개체의 형질은 "rr"이며, 3세대의 9번째 개체의 형질은 "RR"입니다.
형질을 알고 싶은 완두콩의 세대를 나타내는 정수 n과, 해당 완두콩이 세대 내에서 몇 번째 개체인지를 나타내는 정수 p가 2차원 정수 배열 queries의 원소로 주어집니다. 
queries에 담긴 순서대로 n세대의 p 번째 개체의 형질을 문자열 배열에 담아서 return 하도록 solution 함수를 완성해주세요. */

/**나의 풀이 */
function solution(queries) {
    let answer = [];
    queries.forEach((ele)=>{
        let n = ele[0]; // 세대
        let p = ele[1]; // 개체 순서

        answer.push(gen(n, p));
    })
    return answer;
}

function gen(n, p){
    if(n==1) return 'Rr';

    let parent = gen(n-1, Math.ceil(p/4));
    if(parent == 'RR' || parent == 'rr') return parent;

    let childPos = (p-1)%4;
    if(childPos == 0) return 'RR';
    if(childPos == 3) return 'rr';
    else return 'Rr'
}
//==========================연습장===============================//
// let queries = [[3, 1], [2, 3], [3, 9]];	// ["RR", "Rr", "RR"]

// let answer = [];
// queries.forEach((ele)=>{
//     let n = ele[0]; // 세대
//     let p = ele[1]; // 개체 순서

//     answer.push(gen(n, p));
// })
// console.log(answer);

// function gen(n, p){
//     if(n==1) return 'Rr';

//     let parent = gen(n-1, Math.ceil(p/4)%4);
//     if(parent == 'RR' || parent == 'rr') return parent;

//     let childPos = (p-1)%4;
//     if(childPos == 0) return 'RR';
//     if(childPos == 3) return 'rr';
//     else return 'Rr'
// }