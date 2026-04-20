function solution(lottos, win_nums) {
    // 당첨 번호 집합
    const winSet = new Set(win_nums);

    // 맞춘 번호 개수
    let matchCount = lottos.filter(num => winSet.has(num)).length;

    // 0의 개수
    let zeroCount = lottos.filter(num => num === 0).length;

    // 최고, 최저 맞춘 개수
    const maxMatch = matchCount + zeroCount;
    const minMatch = matchCount;

    // 맞춘 개수를 순위로 변환하는 함수
    const getRank = (count) => {
        if (count === 6) return 1;
        if (count === 5) return 2;
        if (count === 4) return 3;
        if (count === 3) return 4;
        if (count === 2) return 5;
        return 6;
    };

    return [getRank(maxMatch), getRank(minMatch)];
}
