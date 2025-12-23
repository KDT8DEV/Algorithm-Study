function solution(num, k) {
    const s = String(num);          
    const idx = s.indexOf(String(k)); 
    return idx === -1 ? -1 : idx + 1; 
}

//숫자는 스플릿 안됨