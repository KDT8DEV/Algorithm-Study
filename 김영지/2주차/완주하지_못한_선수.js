// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

/*나의 풀이*/
// participant와 completion 문자 배열의 index가 같도록 각각 sort해줬다.
// 더 많은 배열의 길이를 가진 participant를 for문 돌려서 같은 인덱스 값의 completion과 비교해준다.
// participant[i]와 completion[i] 값이 다를 때 participant[i] 값을 바로 리턴해준다.
function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for(let i =0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
           return participant[i]
        }
    }
}

/*나의 실패한 시도들*/
// 1) 처음엔 filter와 includes 메서드를 이용해 participant 중에 completion에 포함되지 않은 이름을 필터링해서 리턴해줌
//    이 경우 동명이인인 사람이 미완주자일 경우를 고려하지 못한다.
// 2) 각 배열을 sort하여 for문을 돌리겠단 아이디어를 생각했는데 forEach문을 돌리니 마찬가지로 동명이인 사람을 리턴해주지 못했다.
//    이유는 forEach문은 루프 중간에 return이나 break로 중단하지 못하기 때문에 루프 전체를 다 돈다.
// 3) for문을 돌면서 조건문을 만족하면 answer 변수에 해당하는 participant[i]값을 넣은 후 answer 값을 리턴하게 해주었다.
//    이 역시 에러가 났는데 이유는 for문을 break로 중단해주지 않았기 때문에 forEach문과 마찬가지로 루프를 다 돌아 엉뚱한 값을 리턴해줬다.
//    처음 다른 순간의 값을 리턴해줘야 하므로 바로 리턴해주었다.


/*해시로 푼 코드*/
function solution(participant, completion) {
    let map = {};

    // 참가자 이름 카운트
    for (let p of participant) {
        map[p] = (map[p] || 0) + 1;
    }

    // 완주자 이름 카운트 차감
    for (let c of completion) {
        map[c] -= 1;
    }

    // 아직 1이 남아있는 사람이 미완주자
    for (let key in map) {
        if (map[key] > 0) {
            return key;
        }
    }
}
