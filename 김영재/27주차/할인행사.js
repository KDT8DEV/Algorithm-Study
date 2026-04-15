function solution(want, number, discount) {
    let answer = 0;

    // 목표 맵 생성
    const target = {};
    for (let i = 0; i < want.length; i++) {
        target[want[i]] = number[i];
    }

    // 슬라이딩 윈도우 (10일)
    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const countMap = {};

        // 현재 10일간의 제품 개수 세기
        for (let item of window) {
            countMap[item] = (countMap[item] || 0) + 1;
        }

        // target과 비교
        let isValid = true;
        for (let key in target) {
            if (countMap[key] !== target[key]) {
                isValid = false;
                break;
            }
        }

        if (isValid) answer++;
    }

    return answer;
}
