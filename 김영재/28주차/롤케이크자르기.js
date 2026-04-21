function solution(topping) {
    const rightMap = new Map();
    const leftMap = new Map();
    let fairCuts = 0;

    // 오른쪽 전체 토핑 개수 세기
    for (let t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    // 하나씩 잘라가며 확인
    for (let t of topping) {
        // 왼쪽에 추가
        leftMap.set(t, (leftMap.get(t) || 0) + 1);

        // 오른쪽에서 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }

        // 공평한지 확인
        if (leftMap.size === rightMap.size) {
            fairCuts++;
        }
    }

    return fairCuts;
}
