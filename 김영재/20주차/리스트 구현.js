function solution(arr) {
  arr.sort((a,b)=>b-a)
  return arr[0]-arr[arr.length-1]
}

console.log(solution([12000, 4500, 9800, 15000, 3000]
));