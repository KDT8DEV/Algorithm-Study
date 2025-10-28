function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[Math.floor(numbers.length/2)] 
  };


console.log(solution([1, 2, 3, 4, 5])); 
