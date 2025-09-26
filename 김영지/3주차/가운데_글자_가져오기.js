/**
 * 문제 설명
 */
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

/**
 * 재한사항
 */
// s는 길이가 1 이상, 100이하인 스트링입니다.

/**
 * 나의 풀이
 */
// 홀짝 체크
// 문자열자르기 함수 중 substr 씀
// Math.floor함수로 숫자 내림값 구하기
function solution(s) {
    if(s.length%2==0){
        return s.substr(s.length/2-1,2)
    }
    else{
        let idx = Math.floor(s.length/2)
        return s[idx]
    }
}

/**
 * 가독성 있는 풀이
 */
// slice 사용 → substr보다 조금 더 현대적인 방식
function solution(s) {
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}
