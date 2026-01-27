// https://school.programmers.co.kr/learn/courses/30/lessons/12919

// lv.01

// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul, answer = '') {
  seoul.forEach((e, i) =>
    e.trim() == 'Kim' ? (answer = `김서방은 ${i}에 있다`) : ''
  );
  return answer;
}

// forEach문을 사용하여 Kim을 가지고 있는 요소의 index를 반환한다.
