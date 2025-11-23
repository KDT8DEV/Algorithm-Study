function solution(numbers) {
  numbers.sort((a, b) => a - b);
  //반대는 b-a
  return numbers[Math.floor(numbers.length/2)] 
  };


console.log(solution([1, 2, 3, 4, 5])); 
