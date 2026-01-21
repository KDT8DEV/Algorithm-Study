function solution(phone_number) {
    // 뒷 4자리 추출
    const lastFour = phone_number.slice(-4);
    // 앞 부분은 *로 채움
    const masked = "*".repeat(phone_number.length - 4);
    // 합쳐서 반환
    return masked + lastFour;
}

// 테스트
console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888"));   // "*****8888"
console.log(solution("1234"));        // "1234" (앞부분이 없으므로 그대로)