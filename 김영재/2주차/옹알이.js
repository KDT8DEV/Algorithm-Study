function solution(babbling) {
    var answer = 0;
    const word = ["aya", "ye", "woo", "ma"];
    for( sen in babbling){
        
        //["aya", "yee", "u", "maa", "wyeoo"]
        for(bab in word ){
            
            babbling[sen]=babbling[sen].replaceAll(word[bab],"0");
            //babbling배열에서 문자열 대체 사용
        }
        babbling[sen]=babbling[sen].replaceAll("0","");
        //문자열에서 0을 공백으로 바꿔줌. 그냥 공백으로 바꾸면 "y0e"가 ye로 인식될 수 있음

        if(babbling[sen]=="")answer++;
        //문자열이 공백이 됐으면 0 말고 다른 문자가 없다는 뜻! count해줌
    }
    return answer;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
