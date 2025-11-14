/**문제 설명
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 
썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 
따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 
썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.
선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 
가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요. */

/**제한 조건
스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
스킬 순서와 스킬트리는 문자열로 표기합니다.
예를 들어, C → B → D 라면 "CBD"로 표기합니다
선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
skill_trees는 길이 1 이상 20 이하인 배열입니다.
skill_trees의 원소는 스킬을 나타내는 문자열입니다.
skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
*/

/**나의 풀이 */
// 각각의 스킬트리에서 skill에 포함된 값을 추출해 filtered 문자열 만든다.
// skill이 filtered로 시작되는지 확인해서 카운트를 올려준다.
// skill을 모두 포함할 필요는 없고, skill이 필터된 값으로 시작하는 값을 세준다.
function solution(skill, skill_trees) {
    let cnt = 0;

    for(sTree of skill_trees){
        const filtered = [...sTree].filter(ch => skill.includes(ch)).join("");

        if(skill.startsWith(filtered)){
            cnt++;
        }

    }
    return cnt;
}

//=======================연습장=====================================//
let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
let cnt = 0;

for(sTree of skill_trees){
    const filtered = [...sTree].filter(ch => skill.includes(ch)).join("");

    if(skill.startsWith(filtered)){
        cnt++;
    }
    
}
console.log(cnt);

//=====================실패=============================//
// indexOf 쓰면 안됨
// let skill = "CBD";
// let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
// let cnt = 0;
// let sArr = [...skill];

// for(sTree of skill_trees){
//     // sArr.forEach((val, idx, arr)=>{
//     //     if(sTree.indexOf(val) > sTree.indexOf(arr[idx+1])){
//     //         return;
//     //     }
//     // })
//     for(let i =0; i < sArr.length; i++){
//         if(sTree.indexOf(sArr[i]) > sTree.indexOf(sArr[i+1])){
//             break;
//         }else{
//             cnt++;
//         }
//     }
    
// }
// console.log(cnt);