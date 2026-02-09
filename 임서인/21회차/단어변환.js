function solution(begin, target, words) {
  // (1) target이 words에 없으면 바로 리턴
  if (!words.includes(target)) return 0;

  const visited = new Set();
  const queue = [[begin, 0]]; // 단계로 queue에 넣기

  visited.add(begin);

  while (queue.length) {
    const [cur, step] = queue.shift();

    // (2) 목표 단어 도착 체크
    if (cur == target) return step;

    // (3) 다음으로 갈 수 있는 단어 탐색
    for (const next of words) {
      if (!visited.has(next) && canChange(cur, next)) {
        visited.add(next);
        queue.push([next, step + 1]);
      }
    }
  }

  return 0;
}

function canChange(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff == 1;
}

// function solution(begin, target, words) {
//   // (1) target이 words에 없으면 바로 리턴
//   if ( /* 여기에 조건 */ ) return 0;

//   const visited = new Set();
//   const queue = [ /* 시작 상태 넣기 */ ];

//   while ( /* 큐가 빌 때까지 */ ) {
//     const [cur, step] = /* 큐에서 하나 꺼내기 */;

//     // (2) 목표 단어 도착 체크
//     if ( /* 조건 */ ) return step;

//     // (3) 다음으로 갈 수 있는 단어 탐색
//     for (const next of words) {
//       if (
//         /* 아직 방문 안 했고 */
//         /* cur → next로 변환 가능하면 */
//       ) {
//         /* 방문 처리 */
//         /* 큐에 다음 상태 넣기 */
//       }
//     }
//   }

//   return 0;
// }

// function canChange(a, b) {
//   let diff = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) diff++;
//   }
//   return /* diff 조건 */;
// }

// function solution(begin, target, words) {
//     let word = begin;
//     let count = 0;

//   for(let i=0;i<words.length;i++) { // words만큼 도는 동안
//     let cur = words[i]; // "hot"

//     for (const next of graph[cur]) {
//       if (/*word와 words[i]번째가 하나만 다르면*/ ) {
//         word = words[i]; // 자리바꾸기
//         count++;
//       }
//       if(word == target) return count;
//     }
//       return count ;
//   }
// }

//greedy한 방식으로 한 줄기만 따라가기 때문에 전혀 BFS가 아님
