/**나의 풀이 */
// uid → 닉네임을 Map으로 관리하고, 출력은 마지막에 Map 참조
function solution(record) {
    let nickMap = {};
    let actions = [];

    for(str of record){
        let [action, uid, nickName] = str.split(' ');

        // 새로 들어오거나, 닉네임을 바꿀 때 닉네임을 갱신해준다
        if(action == 'Enter' || action == 'Change'){
            nickMap[uid] = nickName;
        }

        // 새로 들어오거나, 나갈 때 문장을 출력해준다
        if(action == 'Enter' || action == 'Leave'){
            actions.push({action, uid});
        }
    }

    let sentence = actions.map(({action, uid}) => {
        let name = nickMap[uid];
        if(action == 'Enter') return `${name}님이 들어왔습니다.`;
        else return `${name}님이 나갔습니다.`;
    })

    return sentence;
}

//====================연습장========================//
// let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo", "Change uid4567 Ryan"];
// // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// let nickMap = {};
// let actions = [];

// for(str of record){
//     let [action, uid, nickName] = str.split(' ');
    
//     // 새로 들어오거나, 닉네임을 바꿀 때 닉네임을 갱신해준다
//     if(action == 'Enter' || action == 'Change'){
//         nickMap[uid] = nickName;
//     }

//     // 새로 들어오거나, 나갈 때 문장을 출력해준다
//     if(action == 'Enter' || action == 'Leave'){
//         actions.push({action, uid});
//     }
// }

// let sentence = actions.map(({action, uid}) => {
//     let name = nickMap[uid];
//     if(action == 'Enter') return `${name}님이 들어왔습니다.`;
//     else return `${name}님이 나갔습니다.`;
// })

// console.log(sentence);

//=========================2차 시도=================================//
// 아이디어 : Change 로그 정보를 따로 저장해두고, 나중에 해당 인덱스만 갱신
// 문제점 : 한 번만 수정됨, 중복 Change 처리 불가, 로직 복잡
// const newSen = sentence.map((val, idx) => {
//     if(val.action == 'Enter'){
//         return `${val.nickName}이 들어왔습니다.`;

//     }else if(val.action == 'Leave'){
//         let s2 = sentence.find(ele => ele.uid == val.uid);
//         return `${s2.nickName}이 나갔습니다.`;
//     }else{
//         let sIdx = sentence.findIndex(ele => ele.uid == val.uid);
//         let s3 = sentence.find(ele => ele.uid == val.uid);
//         return {idx : sIdx, str : s3, nickName : val.nickName};
//     }
// })
// let idx = sentence.findIndex(ele => ele.action == 'Change');
// console.log(idx);
// let newSenIdx = newSen[idx].idx;
// let newSenStr = newSen[idx].str;
// let newSenNickName = newSen[idx].nickName;
// newSen[newSenIdx] = newSenStr.action == 'Enter' ? `${newSenNickName}이 들어왔습니다.` : `${newSenNickName}이 나갔습니다.`

// console.log(newSen);

//=========================1차 시도=================================//
// 아이디어 : Change가 발생하면 과거 메시지를 직접 찾아서 닉네임을 바꾸려 함
// 문제점 : map() 내부에서 배열 수정 불가, 다중 uid 처리 불가, O(n²)

// const newSen = sentence.map((val, idx) => {
//     if(val.action == 'Enter'){
//         let sIdx = sentence.findIndex(ele => ele.uid == val.uid);
//         console.log(sIdx);
//         let s1 = sentence.find(ele => ele.uid == val.uid);
//         console.log(s1);
//         if(s1 && sIdx > -1){
//             console.log(newSen[sIdx]);
//             newSen[sIdx] = `${s1.nickName}이 들어왔습니다.`;
//         }
//         return `${val.nickName}이 들어왔습니다.`;

//     }else if(val.action == 'Leave'){
//         let s2 = sentence.find(ele => ele.uid == val.uid);
//         return `${s2.nickName}이 나갔습니다.`;
//     }else{
//         let sIdx = sentence.findIndex(ele => ele.uid == val.uid);
//         let s3 = sentence.find(ele => ele.uid == val.uid);
//         if(s3 && sIdx > -1){
//             if(s3.action == 'Enter') newSen[sIdx] = `${s3.nickName}이 들어왔습니다.`;
//             if(s3.action == 'Leave') newSen[sIdx] = `${s3.nickName}이 나갔습니다.`;
//         }
//     }
// })
