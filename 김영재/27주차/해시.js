function solution(clothes) {
    const map = {};

    // 종류별 개수 세기
    for (let [name, type] of clothes) {
        map[type] = (map[type] || 0) + 1;
    }

    // 경우의 수 계산
    let answer = 1;
    for (let type in map) {
        answer *= (map[type] + 1);
    }

    // 아무것도 입지 않는 경우 제외
    return answer - 1;
}
