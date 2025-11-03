/* 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요. */

// 7 14 28 56 112 224

function solution(n, t) {
  var answer = n;
  for (let i = 0; i < t; i++) {
    answer = answer * 2;
    console.log(answer);
  }

  return answer;
}
console.log(solution(7, 15));

/* function solution(n, t) {
  return n << t;
}
비트연산자? 이렇게 간단하게 값이 나온다고?
*/

/* 
function solution(n, t) {

    return n*Math.pow(2,t);
}
pow()가 뭘까? 거듭 제곱근이라는 건데, 

이건 

function solution(n, t) {
    return n*(2**(t))
}

이것과 같아. 2를 t만큼 제곱하고 n를 곱한다라..
*/
