// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// lv01
function solution(numbers, ansArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  return 45 - numbers.reduce((arr, cur) => arr + cur);
}

/*
// 좀,,많이 돌고,, 좀,, 정석적인,,버전
function solution(numbers, ansArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  for (let number of numbers) {
    ansArr = ansArr.filter((e) => e != number);
  }
  return ansArr.reduce((acc, cur) => (acc += cur));
}*/
