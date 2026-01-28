// 문제 설명
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// lv00
function solution(rsp) {
  const result = (rsp + '').split('');
  let answer = result.map((e) => {
    if (e == 2) return 0;
    else if (e == 0) return 5;
    else return 2;
  });
  return answer.join('');
}

// 다른 사람 풀이
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}

// // 접목
// const solution=(rsp)=>{
//   let arr ={ 2:0,0:5,5:2};
//   const arr.
// }
