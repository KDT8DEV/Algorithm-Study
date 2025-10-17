// 문제 설명
// 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
// 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.
// 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 
// 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
 
/**
 * 나의 풀이
 */
// priorities 배열 순서에 맞게 알파벳 문자열을 매핑한 charArr 배열을 새로 만들어줬다.
// location을 인덱스로 가지는 charArr값을 찾는 문자 findChar로 정의
// priorities 배열 안 값이 모두 같은 값일 때까지 반복문을 돌린다.
// priorities의 최대값의 인덱스 maxIdx를 구한 다음
// maxIdx 수만큼 prirorities와 charArr에서 요소를 꺼내 뒤로 보낸다.
// 이때 findChar값과 charArr[0]이 같으면 꺼내는 횟수 cnt++ 해준 뒤 cnt값을 리턴한다.
// 같지 않으면 prirorities와 charArr의 첫번째 요소를 꺼내준 뒤 cnt++ 해준다.
// charArr에서 findChar가 몇번째 값인지 indexOf(findChar)+1 로 구하고 꺼낸 횟수 cnt를 더해준 값을 리턴
function solution(priorities, location) {
    let maxSize = priorities.length;
    let charArr = new Array(maxSize);   // 문자 배열
    let maxIdx = 0;
    let cnt = 0;
    
    priorities.forEach((val, idx)=>{
        charArr[idx] = String.fromCharCode(65+idx);
    })

    let findChar = charArr[location];   // 찾는 문자

    while(new Set(priorities).size !== 1){
        // 최대값의 인덱스 구하기
        maxIdx = priorities.reduce((acc, cur, idx, array)=>{
            return array[acc] < cur ? idx : acc;
        },0);

        for(let i =0; i<maxIdx;i++){
            priorities.push(priorities.shift());
            charArr.push(charArr.shift());
        }

        if(findChar == charArr[0]){
            cnt++;
            return cnt;
        }
        priorities.shift();
        charArr.shift();
        cnt++;
    }

    return charArr.indexOf(findChar)+cnt+1;
}

// 문제점
// reduce와 for 루프를 반복적으로 사용하는 부분에서 시간 복잡도가 커짐
// 문자 배열(charArr) 관리 불필요 — 인덱스로 추적 가능

/**
 * 더 효율적인 풀이
 */
// priorities의 value와 index값을 객체 배열로 넣어 새로운 queue 배열 선언
// queue의 길이만큼 반복문을 돌린다.
// queue의 맨 앞 요소를 꺼내 current에 넣어준다.
// Array.some() : 배열 요소 중 조건에 맞는 게 하나라도 있으면 true 리턴
// queue.some 이용해 배열 item의 우선순위와 current 우선순위를 비교해 현재 요소보다 우선순위가 높은 요소가 남아 있으면 뒤로 보낸다.
// 그렇지 않다면  count++로 꺼내는 횟수를 증가시킨다.
// 현재 요소의 인덱스와 location이 같다면 해당 count를 리턴한다. 
function solution(priorities, location) {
    // 대기열을 객체 배열로 변환
    const queue = priorities.map((priority, index) => ({
        priority,
        index
    }));
    
    let count = 0;  // 꺼내는 횟수

    while (queue.length) {
        const current = queue.shift();  // 맨 앞 문서 꺼내기

        // 현재 문서보다 우선순위가 높은 문서가 남아 있으면 뒤로 보냄
        if (queue.some(item => item.priority > current.priority)) {
            queue.push(current);
        } else {
            count++; // 인쇄됨
            if (current.index === location) {
                return count;  // 내가 요청한 문서면 종료
            }
        }
    }
}























//=============================================연습장=======================================//
// let priorities = [2, 1, 3, 2];
// let location = 2;
// // let priorities = [1, 1, 9, 1, 1, 1];
// // let location = 0;
// // let priorities = [1, 1, 9, 1, 2, 3];
// // let location = 5;

// let maxSize = priorities.length;
// let charArr = new Array(maxSize);   // 문자 배열

// priorities.forEach((val, idx)=>{
//     charArr[idx] = String.fromCharCode(65+idx);
// })

// console.log(charArr);

// let findChar = charArr[location];   // 찾는 문자

// console.log(findChar);


// let maxIdx = 0;
// let cnt = 0;

// while(new Set(priorities).size !== 1){
//     // 최대값의 인덱스 구하기
//     maxIdx = priorities.reduce((acc, cur, idx, array)=>{
//         return array[acc] < cur ? idx : acc;
//     },0);

//     console.log(maxIdx);

//     for(let i =0; i<maxIdx;i++){
//         priorities.push(priorities.shift());
//         charArr.push(charArr.shift());
//     }
//     console.log(priorities);
//     console.log(charArr); 

//     if(findChar == charArr[0]){
//         cnt++;
//         console.log(cnt);
//         break;
//     }
//     priorities.shift();
//     charArr.shift();
//     cnt++;
// }


// console.log(priorities);
// console.log(charArr);


// console.log(charArr.indexOf(findChar)+cnt+1);


