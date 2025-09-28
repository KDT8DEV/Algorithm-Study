// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

solution = (x) => {
  let separate = (x + '').split('');
  const beHars = separate.reduce((acc, cur) => +acc + +cur);
  return x % beHars == 0;
};

/* 
✅ 변수에 사용 - OK
let x = 5;
x += 3;  // x = x + 3

❌ 표현식에 사용 - ERROR  
(+acc) += (+cur);  // +acc는 표현식이지 변수가 아님
*/
/*
Boolean(숫자)
0과 1이상으로 판별하는게 아니라 값있음 없음으로 판별함
*/
/*
return (x%beHars==0)?true:false;
이 문장 자체가 true를 반환하기 떄문에 굳이 삼항연산자 안붙여도됨
*/
