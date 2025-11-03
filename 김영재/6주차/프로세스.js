

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// // 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// // 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
// //   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
function solution(priorities, location) {
    let count = 0;

    while (priorities.length > 0) {
        let current = priorities[0];
        let hasHigher = priorities.some(p => p > current);
        //현재보다 높은 우선순위가 있는지 확인
        
        if (hasHigher) { //더 높은 우선순위가 있다면
            priorities.push(priorities.shift()); //앞에 있는걸 맨 뒤로
            location = location === 0 ? priorities.length - 1 : location - 1; //0이었으면 위치를 맨 뒤로. 아니라면 한번 앞으로 땡겨줌
        } else {
            priorities.shift(); //더 높은 우선순위가 없다면 그냥 삭제(실행).
            count++; //몇번째에 있는지 확인.
            if (location === 0) {//내가 찾는 요소의 차례가 오면 
                return count; //몇번쨰인지 반환
            }
            location--; //위치 땡기기
        }
        console.log(priorities);
    }
}
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1,1,9,1,1,1], 0));


// function solution(priorities, location) { process_priority = priorities[location];
// for (i in priorities) {
//     for (j = 1; j < priorities.length; j++) {
//         if (priorities[0] < priorities[j]) {
            
//             priorities.push(priorities.shift())
//             if(location==0)location=priorities.length-1
//             else location--;
//         }
//         console.log(priorities)
//     }
// }
// return location+1;
// }
