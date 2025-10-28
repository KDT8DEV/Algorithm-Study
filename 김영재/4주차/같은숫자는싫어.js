// function solution(arr)
// {
//     var answer = [];
//     let first =-1;
//     for(el of arr){
//         if(first!=el){
//             first=el
//             answer.push(el)
//         }
//     }
//     return answer;
// }

// console.log(solution([1,1,3,3,0,1,1]))

/** 문제 풀이 2 */
function solution(arr) {
  let answer = []
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index], arr[index+1])
    if (arr[index] !== arr[index + 1]) {
        
      answer.push(arr[index])
    }
  }
  console.log(answer)

  return answer
}

solution([1, 1, 3, 3, 0, 1, 1])
solution([4, 4, 4, 3, 3])