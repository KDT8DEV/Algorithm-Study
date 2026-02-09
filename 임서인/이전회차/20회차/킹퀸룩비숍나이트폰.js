// 백준 문제




// [1,1,2,2,2,8]

// solution=(arr)=>{
//   let input = arr.split(' ');
//   const answer = [1,1,2,2,2,8]
//   let result = [];
//   for(let i=0;i<input.length;i++){
//     result.push(answer[i]-input[i]);
//   }
//   return result.join(' ');
// }


solution=(arr)=>{
  let input = arr.split(' ').map(Number);
  const answer = [1,1,2,2,2,8];
  return answer.map((e,i)=>e-input[i]).join(' ');
}

console.log(solution("0 1 2 2 2 7"))
console.log(solution("2 1 2 1 2 1"))