// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 성공
function solution(food) {
  let arr = food.map((e, i) => {
    if (e % 2 == 1) {
      return e - 1;
    } else {
      return e;
    }
  });
  let result = '';
  arr.forEach((e, i) => {
    if (e > 0) {
      result += String(i).repeat(e / 2);
    }
  });

  return result + '0' + result.split('').reverse().join('');
}

function solution(food) {
  let result = '';
  food.forEach((e, i) => {
    if (e % 2 == 1 && e !== 1) {
      result += String(i).repeat((e - 1) / 2);
    } else {
      result += String(i).repeat(e / 2);
    }
  });

  return result + '0' + result.split('').reverse().join('');
}
// 코드정리완
// forEach로 홀수면 하나는 버리고 1이 아닌 상황에서
// 인덱스를 개수만큼 repeat하고 0을 사이에 두고 reverse한다
