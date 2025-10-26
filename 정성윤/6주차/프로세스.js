function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);

    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }
    console.log(arr);

    while(priorities.length != 0){
         max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else if(priorities[0] == max_value){
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}
console.log(solution([2, 1, 3, 2],2));

/*
function solution(priorities, location) {
  // # [인덱스, 중요도] 형태로 큐 구성
  let queue = priorities.map((p, i) => [i, p]);
  let answer = 0; // # 인쇄된 개수(순번)

  while (queue.length) {
    // # 현재 최댓값
    const maxPriorities = Math.max(...queue.map(([_, p]) => p));

    // # 맨 앞 문서
    const [idx, priorities] = queue.shift();

    if (priorities < maxPriorities) {
      queue.push([idx, priorities]);      // # 중요도 낮으면 뒤로 보냄
    } else {
      answer += 1;               // # 인쇄됨
      if (idx === location) 
        return answer; // # 찾는 문서면 종료
    }
  }
}
*/
