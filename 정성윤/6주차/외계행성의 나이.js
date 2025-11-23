//숫자 문제는 문자열로 바꿔
function solution(age) {
    let answer = [];
    const strage = String(age);
    let abcmap = 
    {                         
    '0':'a','1':'b','2':'c','3':'d','4':'e',
    '5':'f','6':'g','7':'h','8':'i','9':'j'
  };
    for (let i = 0; i < strage.length; i++){
        answer.push(abcmap[strage[i]])

    }
    return answer.join("");
}

console.log(solution(23));