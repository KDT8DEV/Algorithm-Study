function solution(sides) {
    sides.sort((a,b)=> a-b)
    if(sides[sides.length-1] >= sides[0]+ sides[1])
        return 2
    else
        return 1
}

// answer.sort((a,b)=> a-b)
//     return answer;