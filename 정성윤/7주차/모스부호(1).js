function solution(letter) {
    let answer = [];
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    const lettersplit = letter.split(' ');      

    for (const code of lettersplit) {                   
        answer.push(morse[code]);           
    }
    return answer.join('');                       
}

console.log(solution(".... . .-.. .-.. ---"))

