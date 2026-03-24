function solution(strings, n) {
    return strings.sort((a, b) => {
        // n번째 문자가 다르면 그 문자 기준으로 정렬
        if (a[n] !== b[n]) {
            return a[n].localeCompare(b[n]);
        }
        // 같으면 문자열 전체를 사전순으로 정렬
        return a.localeCompare(b);
    });
}