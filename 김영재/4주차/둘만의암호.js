function solution(s, skip, index) {
    let answer = '';
    const skipSet = new Set(skip.split('').map(ch => ch.charCodeAt(0)));

    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt(0);
        let cnt = 0;

        while (cnt < index) {
            code++;
            if (code > 122) code = 97; 
            if (!skipSet.has(code)) cnt++; //set로 넣어서 has함수
        }

        answer += String.fromCharCode(code);
    }

    return answer;
}
console.log(solution("aukks","wbqd",5,"happy"))