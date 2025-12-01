function solution(n, words) {
    let wordMap = {};
    wordMap[words[0]] = 1;

    let answer = [0, 0];
    for (let i = 1; i < words.length; i++) {
        let lastLetter = words[i - 1][words[i - 1].length - 1];
        let firstLetter = words[i][0];
 
        if (lastLetter !== firstLetter) {
            answer = [i % n + 1, Math.floor(i / n + 1)];
            break;
        }
 
        if (wordMap[words[i]]) {
            answer = [i % n + 1, Math.floor(i / n + 1)];
            break;
        }

        wordMap[words[i]] = 1;
    }

    return answer;
}
console.log(solution(3,
    ["tank", "kick", "know",
        "wheel", "land", "dream",
        "mother", "robot", "tank"]));

console.log(solution(2,
    ["hello", "one",
        "even", "never",
        "now", "world",
        "draw"]));