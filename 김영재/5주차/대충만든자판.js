
function solution(keymap, targets) {
    const answer = [];

    for (const target of targets) {
        let totalPress = 0;
        let isPossible = true;

        for (const char of target) {
            let minPress = Infinity;

            for (const key of keymap) {
                const index = key.indexOf(char);
                if (index !== -1) {
                    minPress = Math.min(minPress, index + 1); //더 작은 값 저장
                }
            }

            if (minPress === Infinity) {
                isPossible = false;
                break;
            }

            totalPress += minPress;
        }

        answer.push(isPossible ? totalPress : -1);
    }

    return answer;
}
console.log(solution(	["AA"], ["B"]));
console.log(solution(	["ABACD", "BCEFD"],["ABCD","AABB"]));

