function solution(s, n) {
    let answer = '';

    for (let char of s) {
        if (char === ' ') {
            answer += ' ';
        } else {
            const code = char.charCodeAt(0);
            // 대문자 범위: 65(A) ~ 90(Z)
            if (code >= 65 && code <= 90) {
                answer += String.fromCharCode(((code - 65 + n) % 26) + 65);
            }
            // 소문자 범위: 97(a) ~ 122(z)
            else if (code >= 97 && code <= 122) {
                answer += String.fromCharCode(((code - 97 + n) % 26) + 97);
            }
        }
    }

    return answer;
}
