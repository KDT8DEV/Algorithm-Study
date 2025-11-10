
/**나의 풀이 */
// 객체의 키의 value값을 배열로 받는다. 그냥 push 사용하면 된다.
// split(' ')한 배열의 값을 구조분해 할당으로 받으면 편리
// 신고 횟수 객체를 따로 선언해서 체크 후 k와 비교하여 강퇴자를 id_list에서 filter한다.
// rptMap[id]는 배열이므로 filter함수 사용 가능하다. rptMap[id]에 들어 있는 이름이 강퇴자 명단에 몇명 포함되어 있는지 갯수를 리턴한다.
function solution(id_list, report, k) {
    // 신고한 사람
    let rptMap = new Map();
    // 신고당한 횟수
    let rptCnt = {};

    id_list.forEach(id => {
        rptMap[id] = [];    // 배열로 초기화
        rptCnt[id] = 0;     // 0으로 초기화
    })

    // 중복 신고 제거
    let uniqueRpts = [...new Set(report)];

    for(val of uniqueRpts){
        const [from, to] = val.split(' ');

        rptMap[from].push(to);
        rptCnt[to]++;
    }

    // console.log(rptMap);
    // console.log(rptCnt);

    // 강퇴자
    const banned = id_list.filter(id => rptCnt[id]>=k);
    // console.log(banned);

    const answer = id_list.map(id => {
        return rptMap[id].filter(name => banned.includes(name)).length;
    });

    return answer;
}
//============================연습장=======================================//
// let id_list = ["muzi", "frodo", "apeach", "neo"];
// let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
// let k =	2; // return	[2,1,1,0]

// // 신고한 사람
// let rptMap = new Map();
// // 신고당한 횟수
// let rptCnt = {};

// id_list.forEach(id => {
//     rptMap[id] = [];    // 배열로 초기화
//     rptCnt[id] = 0;     // 0으로 초기화
// })

// // 중복 신고 제거
// let uniqueRpts = [...new Set(report)];

// for(val of uniqueRpts){
//     const [from, to] = val.split(' ');

//     rptMap[from].push(to);
//     rptCnt[to]++;
// }

// // console.log(rptMap);
// // console.log(rptCnt);

// // 강퇴자
// const banned = id_list.filter(id => rptCnt[id]>=k);
// // console.log(banned);

// const answer = id_list.map(id => {
//     return rptMap[id].filter(name => banned.includes(name)).length;
// });

// console.log(answer);