function solution(s) {
    answer = new Set
    keymap = {} 
    s.split("").map((el, idx) => {
        if (keymap[el] != undefined && keymap[el] + 1 != idx) {
            answer.add(el)
        }
        keymap[el] = idx
    })
    str=[...answer].sort().join('')
    return str==''?'N':str;
}
console.log(solution("edeaaabbccd"));
