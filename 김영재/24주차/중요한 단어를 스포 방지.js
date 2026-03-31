function solution(message, spoiler_ranges) {
    // 스포일러 구간 병합
    spoiler_ranges.sort((a, b) => a[0] - b[0]);
    let merged = [];
    for (let [s, e] of spoiler_ranges) {
        if (!merged.length || merged[merged.length - 1][1] < s) {
            merged.push([s, e]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e);
        }
    }

    // 단어 추출
    let regex = /\w+/g;
    let words = [];
    let match;
    while ((match = regex.exec(message)) !== null) {
        words.push({
            word: match[0],
            start: match.index,
            end: match.index + match[0].length - 1
        });
    }

    // 스포일러 단어 판별
    const isSpoiler = (w) => merged.some(([s, e]) => !(w.end < s || w.start > e));

    // 스포일러 아닌 곳에서 등장한 단어 집합
    let nonSpoilerSet = new Set(words.filter(w => !isSpoiler(w)).map(w => w.word));

    // 중요한 단어 카운트
    let seen = new Set();
    let count = 0;

    for (let [s, e] of merged) {
        for (let w of words) {
            if (!(w.end < s || w.start > e)) {
                if (isSpoiler(w) && !nonSpoilerSet.has(w.word) && !seen.has(w.word)) {
                    count++;
                    seen.add(w.word);
                }
            }
        }
    }

    return count;
}

console.log(solution("here is muzi here is a secret message", [[0, 3], [23, 28]]));
// 예상 결과: 1 (스포일러 구간에만 등장하는 "볼드모트")

console.log(solution("아이언맨은 천재다. 아이언맨이 타노스를 물리친다.", [[15, 40]]));
// 예상 결과: 1 (스포일러 구간에만 등장하는 "타노스")

console.log(solution("토르와 로키는 형제다. 로키가 배신한다.", [[20, 35]]));
// 예상 결과: 0 (로키는 스포일러 밖에도 등장했으므로 카운트하지 않음)

console.log(solution("반지의 제왕에서 프로도는 반지를 파괴한다.", [[10, 30]]));
// 예상 결과: 1 (스포일러 구간에만 등장하는 "프로도")
