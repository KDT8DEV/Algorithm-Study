function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    for (let str of babbling) {
        let i = 0;
        let prev = "";
        let isValid = true;

        while (i < str.length) {
            let matched = false;

            for (let word of words) {
                if (str.startsWith(word, i)) {
                    if (word === prev) {
                        isValid = false; // 같은 단어 연속 사용
                        break;
                    }
                    prev = word;
                    i += word.length;
                    matched = true;
                    break;
                }
            }

            if (!matched || !isValid) {
                isValid = false;
                break;
            }
        }

        if (isValid) answer++;
    }

    return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
