function solution(name) {
    let answer = 0;
 
    for (let i = 0; i < name.length; i++) {
        const diff = name.charCodeAt(i) - 'A'.charCodeAt(0);
        const reverseDiff = 26 - diff;
        answer += Math.min(diff, reverseDiff);
    }
 
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let next = i + 1;

        while (next < name.length && name[next] === 'A') {
            next++;
        }
 
        move = Math.min(
            move,
            i + name.length - next + Math.min(i, name.length - next)
        );
    }

    return answer + move;
}
console.log(solution("JEROEN"));
console.log("A".charCodeAt(0));
console.log("J".charCodeAt(0));
console.log("Z".charCodeAt(0));
