// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// lv02
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

function solution(string, value = 0, ans = true) {
  for (i = 0; i < string.length; i++) {
    if (string[i] == '(') {
      value++;
    } else {
      value--;
      if (value < 0) {
        ans = false;
        break;
      }
    }
  }
  return value > 0 ? false : ans;
}

// count??
/*
)로 시작하면 false
(로 끝나면 false
s.length가 홀수면 false
같은 종류만 있어도 false

 ()(()(
    (여는_괄호의 다음에 닫는_괄호가 있으면
     가장 마지막 여는_괄호는 true가 된다
     
     // 이거는 걍 1번 아이디어
     true가 되면! delete 한쌍
     s.length 가 0이면 true
     s.length 가 0이 아니면 false
     
     // 반복문 돌아가는 와중에 delete하면 안된댔는데!!!!
     + - 로 0 계산하는거는 변수가 많을 것 같아서 안하려고 했지만
     따로 예외 처리만 잘 하면,,, 가능한 것이었다,,,띠롱,,,
 
 ( false
 ( false false
 ) false true
 ( false true false
 ) false true true
 ) true true true

()짝이
*/
console.log();
console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
