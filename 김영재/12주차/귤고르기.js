// function solution(k, tangerine) {
//     let keymap = {}
//     tangerine.forEach(element => {
//         keymap[element] = (keymap[element] || 0) + 1
//     });
//     const totalLength=Object.keys(keymap).length;
//     while (k > 0) {
//         const maxValue = Math.max(...Object.values(keymap));
//         const maxKey = Object.keys(keymap).find(key => keymap[key] === maxValue);
//         k-=maxValue;
//         delete keymap[maxKey];
//     }
//     return totalLength-Object.keys(keymap).length;
// }

function solution(k, tangerine) {
    let keymap = {};
    tangerine.forEach(element => {
        keymap[element] = (keymap[element] || 0) + 1;
    });

    // value만 뽑아서 내림차순 정렬
    const counts = Object.values(keymap).sort((a, b) => b - a);

    let used = 0;
    let answer = 0;

    for (let count of counts) {
        if (used >= k) break;
        used += count;
        answer++;
    }

    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));

console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
