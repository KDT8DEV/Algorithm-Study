function solution(s) {
    // 모두 소문자로 변환
    const str = s.toLowerCase();

    // p와 y 개수 세기
    let countP = 0;
    let countY = 0;

    for (let ch of str) {
        if (ch === 'p') countP++;
        if (ch === 'y') countY++;
    }

    // 개수 비교
    return countP === countY;
}