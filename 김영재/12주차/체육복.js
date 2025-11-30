function solution(n, lost, reserve) {
    const realLost = lost.filter(x => !reserve.includes(x));
     const realReserve = reserve.filter(x => !lost.includes(x));
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b).forEach(element => {
        if (realLost.indexOf(element - 1) !== -1) {
            realLost.splice(realLost.indexOf(element - 1), 1);
        } else if (realLost.indexOf(element + 1) !== -1) {
            realLost.splice(realLost.indexOf(element + 1), 1);
        }
    });
    return n - realLost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
