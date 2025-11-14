/**문제 설명
숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 
기사들은 무기점에서 무기를 구매하려고 합니다.
각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 
제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 
만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 
15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 
무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 
무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오. */

/**나의 풀이 */
function solution(number, limit, power) {
    let arr = new Array(number+1).fill(0);  // 약수의 개수 배열을 0으로 채운다.

    for(let i = 1; i <= number; i++){
        // i가 j의 약수라면, j는 i의 배수
        // i의 배수 인덱스에 값을+1해줌
        for(let j = i; j<=number;j+=i){
            arr[j]++;
        }
    }

    let sum = 0;
    for(let i = 1;i<=number;i++){
        sum += arr[i] > limit ? power : arr[i];
    }

    return sum;
}

//========================연습장===================================//
// let number = 5;	
// let limit = 3;
// let power =	2; //	10
// let number = 10;
// let limit = 3;
// let power =	2; //	21

// // 약수의 개수 구한 배열
// // 배열에서 limit보다 큰 값을 찾아 power로 변경
// // 변경한 배열 더하기
// let arr = new Array(number+1).fill(0);

// for(let i = 1; i <= number; i++){
//     for(let j = i; j<=number;j+=i){
//         arr[j]++;
//     }
// }

// let sum = 0;
// for(let i = 1;i<=number;i++){
//     sum += arr[i] > limit ? power : arr[i];
// }

// console.log(sum);



// =====================실패 : 시간초과===================//
// let number = 5;	
// let limit = 3;
// let power =	2; //	10
// let number = 10;
// let limit = 3;
// let power =	2; //	21

// // 약수의 개수 구한 배열
// // 배열에서 limit보다 큰 값을 찾아 power로 변경
// // 변경한 배열 더하기
// let arr = [];
// for(let i = 1; i <= number; i++){
//     let cnt = 0;
//     let divideNum = 1;
//     while(divideNum <= i){
//         if(i % divideNum === 0){
//             cnt++;
//         }
//         divideNum++;
//     }
//     arr.push(cnt);
// }

// console.log(arr);

// const newArr = arr.map(v => v > limit ? power : v);

// console.log(newArr);

// const answer = newArr.reduce((acc, curr)=> acc + curr);
// console.log(answer);