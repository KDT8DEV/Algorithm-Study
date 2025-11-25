function solution(array, n) {
    // 1) 절댓값 거리 기준으로 정렬
    // 2) 거리 같으면 실제 값 기준 오름차순으로 정렬
    array.sort((a, b) => {
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);

        if (distA === distB) {
            return a - b;    // 거리 같으면 숫자 작은 것이 먼저
        }
        return distA - distB; // 거리 작은 것이 먼저
    });

    // 3) 정렬된 첫 번째 값이 정답
    return array[0];
}
