function solution(n, lost, reserve) {
    // 실제로 체육복을 잃어버린 학생 목록 (여벌이 있는 학생은 제외)
    const realLost = lost.filter(x => !reserve.includes(x));

    // 실제로 여벌 체육복을 가진 학생 목록 (잃어버린 학생은 제외)
    const realReserve = reserve.filter(x => !lost.includes(x));

    // 잃어버린 학생 번호를 오름차순 정렬
    // realLost.sort((a, b) => a - b);

    // 여벌 체육복을 가진 학생 번호를 오름차순 정렬 후 순회
    realReserve.forEach(element => {
        // 앞 번호 학생에게 빌려줄 수 있는 경우
        if (realLost.indexOf(element - 1) !== -1) {
            realLost.splice(realLost.indexOf(element - 1), 1); // 빌려주고 목록에서 제거
        }
        // 뒷 번호 학생에게 빌려줄 수 있는 경우
        else if (realLost.indexOf(element + 1) !== -1) {
            realLost.splice(realLost.indexOf(element + 1), 1); // 빌려주고 목록에서 제거e 
        }
    });

    // 전체 학생 수에서 아직 체육복이 없는 학생 수를 빼서 결과 반환
    return n - realLost.length;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
