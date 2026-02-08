function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const canConvert = (word1, word2) => {
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
        }
        return diff === 1;
    };

    const visited = new Set();
    const queue = [[begin, 0]]; // [현재 단어, 단계 수]

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        if (current === target) return steps;

        for (const word of words) {
            if (!visited.has(word) && canConvert(current, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        }
    }

    return 0;
}

//dfs풀이
// function solution(begin, target, words) {
//   if (!words.includes(target)) return 0;

//   const canConvert = (word1, word2) => {
//     let diff = 0;
//     for (let i = 0; i < word1.length; i++) {
//       if (word1[i] !== word2[i]) diff++;
//     }
//     return diff === 1;
//   };

//   let answer = Infinity;
//   const visited = new Set();

//   function dfs(current, steps) {
//     if (current === target) {
//       answer = Math.min(answer, steps);
//       return;
//     }

//     for (const word of words) {
//       if (!visited.has(word) && canConvert(current, word)) {
//         visited.add(word);
//         dfs(word, steps + 1);
//         visited.delete(word); // 백트래킹
//       }
//     }
//   }

//   dfs(begin, 0);

//   return answer === Infinity ? 0 : answer;
// }