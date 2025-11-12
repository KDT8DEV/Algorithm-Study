
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

// filter 풀이
// function solution(my_string) {
//     let vowels = ['a','e','i','o','u'];
    
//     let charArray = my_string.split('');
    
//     let filteredArray = charArray.filter(char => {
//         return !vowels.includes(char);
//     });
    
//     let answer = filteredArray.join('');
    
//     return answer;
// }


console.log(solution("abc")); 
console.log(solution("nice to meet you")); 