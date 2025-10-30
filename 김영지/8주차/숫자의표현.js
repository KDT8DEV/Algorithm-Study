/** 문제 설명
 * Finn은 요즘 수학공부에 빠져 있습니다. 
 * 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
 * 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
 * 1 + 2 + 3 + 4 + 5 = 15
 * 4 + 5 + 6 = 15
 * 7 + 8 = 15
 * 15 = 15
 * 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
*/

/** 제한사항
 * n은 10,000 이하의 자연수 입니다.
*/

/**
 * 나의풀이
*/
// 시작 값부터 연속적으로 더한 값이 n을 넘지 않을 때까지 더한다.
// sum과 n이 같을 때의 갯수를 센다.
// 시작값을 1 ~ n/2 까지 반복하여 설정한다.
function solution(n) {
    let half = Math.floor(n/2);
    let cnt = 0;

    for(let i = 1; i <= half;i++){
        let sum = 0;
        let start = i;
        while(sum < n){
            sum += start;
            start++;
        }   

        if(sum == n){
            cnt++;
        }

    }

    return cnt+1;
}

/**
 * 더 효율적인 풀이
*/
// n = a + (a+1) + (a+2) + ... + (a+k-1)
// n = k*a + (k*(k-1))/2
// => a = (n - k*(k-1)/2) / k
function solution(n) {
  let count = 0;

  for (let k = 1; k * (k + 1) / 2 <= n; k++) {
    const numerator = n - (k * (k - 1)) / 2;

    if (numerator % k === 0) {
      count++;
    }
  }

  return count;
}


//==========================테스트======================//
// let n = 15 // 4
// let n = 9 // 3
let n = 16 // 1

let half = Math.floor(n/2);
let i = 1;
let cnt = 0;

for(let i = 1; i <= half;i++){
    let sum = 0;
    let start = i;
    while(sum < n){
        sum += start;
        console.log(sum);
        start++;
    }   

    if(sum == n){
        cnt++;
    }
    
}

console.log(cnt+1);