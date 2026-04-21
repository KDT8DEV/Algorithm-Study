function solution(numLog) {
    const map = { 1: "w", "-1": "s", 10: "d", "-10": "a" };

    return numLog
        .slice(1)
        .map((val, i) => map[val - numLog[i]])
        .join("");
}

// 풀이
// 연속된 두 값의 차이를 구해 map 객체로 대응하는 문자로 변환
// slice(1)로 두 번째 원소부터 순회하고 key로 문자를 찾는다
