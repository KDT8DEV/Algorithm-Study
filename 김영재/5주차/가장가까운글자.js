// function solution(s) {
//     answer = []
//     keymap = {}
//     s.split("").map((el, idx) => {
//         if (keymap[el] == undefined) {
//             answer.push(-1)
//         }
//         else {
//             answer.push(idx - keymap[el])
//         }
//         keymap[el] = idx
//     })
//     return answer;
// }


function solution(s) {
    
    keymap = {};
    return [...s].map((el, idx) => {
        let result = keymap[el]==undefined?-1:idx-keymap[el];
        keymap[el]=idx;
        return result;
    })
 }
console.log(solution("aaaaaaa"));

