function solution(s){
    stack = []

    for(let i = 0; i<s.length;i++){
        if (s[i] == "("){
            stack.push(s[i])
        }
        else{
            if (stack.length > 0 && stack[stack.length-1]=="("){
                stack.pop()
            }
            else{
                stack.push(s[i])
            }
        }
    }
    if(stack.length==0){
        return true
    }
    else{
        return false
    }
}
console.log(solution("(()("));

// function solution(s){
//     var answer = true;
//     arr = []
//     lcnt = 0
//     rcnt = 0
//     for(let i = 0; i<s.length;i++){
//         arr.push(s[i])
//         if (s[i] == "("){
//             lcnt += 1
//         }else{
//             rcnt += 1
//         }
//     }
//     if (lcnt == rcnt){
//         if (arr[arr.length-1]=="("){
//             return false
//         }
//         else if (arr[arr.length-1]==")"){
//             return true
//         }
//     }
//     else if (lcnt !== rcnt){
//         return false;
//     }
// }

// console.log(solution("(()("));
