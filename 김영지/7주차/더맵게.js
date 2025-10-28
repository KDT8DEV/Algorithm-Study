/**
 * 문제 설명
매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 
모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 
모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

제한 사항
scoville의 길이는 2 이상 1,000,000 이하입니다.
K는 0 이상 1,000,000,000 이하입니다.
scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.*/


// 나의 풀이
function solution(scoville, K) {
    // 최소 힙으로 사용될 배열
    const heap = [...scoville];

    // 초기 힙 구성 (정렬된 배열 ≠ 힙)
    buildHeap(heap);

    let count = 0;

    // 가장 작은 값이 K 이상이 될 때까지 반복
    while (heap[0] < K) {
        // 섞을 음식이 2개 미만이면 불가능 → -1 리턴
        if (heap.length < 2) return -1;

        // 가장 안 매운 두 개 꺼내기
        const first = pop(heap);
        const second = pop(heap);

        // 새로운 음식의 스코빌 계산
        const mixed = first + (second * 2);

        // 새 음식 힙에 삽입
        push(heap, mixed);
        count++;
    }

    return count;
}


// 최소 힙 구성 (bottom-up 방식)
function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i);
    }
}

// 힙에 새 값 추가
function push(heap, value) {
    heap.push(value);
    heapifyUp(heap);
}

// 힙의 최소값(루트) 꺼내기
function pop(heap) {
    if (heap.length === 1) return heap.pop();

    const min = heap[0];
    heap[0] = heap.pop();
    heapifyDown(heap, 0);

    return min;
}

// 아래로 내려가며 정렬 (부모가 자식보다 커지지 않게)
function heapifyDown(heap, idx) {
    const length = heap.length;

    while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        let smallest = idx;

        if (left < length && heap[left] < heap[smallest]) smallest = left;
        if (right < length && heap[right] < heap[smallest]) smallest = right;

        if (smallest === idx) break;

        [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
        idx = smallest;
    }
}

// 위로 올리며 정렬 (부모보다 작으면 자리 교체)
function heapifyUp(heap) {
    let idx = heap.length - 1;

    while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (heap[parent] <= heap[idx]) break;

        [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
        idx = parent;
    }
}

// ===================================연습장==============================================//
// let scoville = [1, 1, 1, 1];
// let K = 11;
// let cnt = 0;

// // 최소힙으로 정렬된 상태 만들기
// buildHeap(scoville);

// while (scoville[0] < K) {
//     if (scoville.length < 2) {
//         cnt = -1;
//         break;
//     }

//     // 최소 두 개 꺼내기
//     let min1 = pop();
//     let min2 = pop();

//     let mixed = min1 + (min2 * 2);
//     push(mixed);
//     cnt++;
// }

// console.log(cnt); // -1

// function buildHeap(arr) {
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//         heapifyDown(i);
//     }
// }

// function push(value) {
//     scoville.push(value);
//     heapifyUp();
// }

// function pop() {
//     if (scoville.length === 1) return scoville.pop();

//     const min = scoville[0];
//     scoville[0] = scoville.pop();
//     heapifyDown(0);

//     return min;
// }

// function heapifyUp() {
//     let idx = scoville.length - 1;
//     while (idx > 0) {
//         let parent = Math.floor((idx - 1) / 2);
//         if (scoville[parent] <= scoville[idx]) break;
//         [scoville[parent], scoville[idx]] = [scoville[idx], scoville[parent]];
//         idx = parent;
//     }
// }

// function heapifyDown(idx) {
//     const length = scoville.length;

//     while (true) {
//         let left = idx * 2 + 1;
//         let right = idx * 2 + 2;
//         let smallest = idx;

//         if (left < length && scoville[left] < scoville[smallest]) smallest = left;
//         if (right < length && scoville[right] < scoville[smallest]) smallest = right;

//         if (smallest === idx) break;

//         [scoville[idx], scoville[smallest]] = [scoville[smallest], scoville[idx]];
//         idx = smallest;
//     }
// }

// ===================================세번째 실패==============================================//
// // let scoville = [1, 2, 3, 9, 10, 12];
// // let scoville = [1, 1, 9, 2];    // 2
// let scoville = [1, 1, 1, 1];    // 11
// let min = 0;
// let K = 11;
// let mixed = 0;
// let cnt = 0;
// // 배열을 정렬한다.
// // 배열의 최소값이 K 미만일 때 섞는다
// // 최소값과 두번째 최소값을 꺼내서 계산
// // 스코빌 배열 뒤에 넣는다.
// // 최소 힙 구현해서 정렬. 맨 앞 인덱스를 min으로 정의
// // 배열의 최소값이 K 미만이면 또 섞는다
// // 최소값과 두번째 최소값을 계산해서 스코빌 배열에 넣는다.
// // 배열의 최소값이 K 이상일 때까지 반복한다.

// scoville.sort((a, b) => a-b);

// min = scoville[0];
// // console.log(min);

// while(min < K){
//     // 배열에 남아있는 개수가 2미만이면 -1 리턴
//     if(scoville.length < 2) return -1;

//     let min1 = scoville.shift();
//     heapifydown();
//     let min2 = scoville.shift();
//     heapifydown();
    
//     mixed = min1 + (min2*2);
//     console.log(scoville);
//     scoville.push(mixed);
//     heapifyup();

//     // min을 맨 앞 인덱스(최소값)로 정의
//     min = scoville[0];

//     // 섞는 횟수 카운팅
//     cnt++
// }


// console.log(cnt);

// // heapifyup 구현해보기
// function heapifyup(){
//     // 추가된 값 인덱스
//     let insertedIdx = scoville.length -1;

//     // insertedIdx가 0(루트)으로 올라갈 때까지 반복
//     while(insertedIdx > 0){
//         // 추가된 값 인덱스의 부모 인덱스
//         let parentIdx = Math.floor((insertedIdx - 1)/2);

//         // 부모값이랑 현재값 비교해서 부모가 작거나 같으면 break
//         if(scoville[parentIdx] <= scoville[insertedIdx]) break;

//         // 부모가 크면 자리 바꾸기
//         [scoville[insertedIdx], scoville[parentIdx]] = [scoville[parentIdx], scoville[insertedIdx]];

//         // insertedIdx 값을 부모 인덱스로 변경
//         insertedIdx = parentIdx;
//     }
// }

// function heapifydown(){
//     let index = 0;
//     let length = scoville.length;
//     // if(length > 1) scoville.unshift(scoville.pop());
    
    
//     while(length > 1){
//         // 부모가 된 인덱스의 다른 자식 노드랑도 비교
//         let leftChildIdx = 2*index + 1;
//         let rightChildIdx = 2*index + 2;
//         let smallest = index;

//         // 현재 인덱스랑 자식 노드랑 비교해서 작은 값의 인덱스를 smallest에 넣기
//         if(leftChildIdx < length && scoville[leftChildIdx] <= scoville[smallest]) smallest = leftChildIdx;
//         if(rightChildIdx < length && scoville[rightChildIdx] <= scoville[smallest]) smallest = rightChildIdx;

//         if(smallest === index) break;

//         // 자리 바꾸기
//         [scoville[smallest], scoville[index]] = [scoville[index], scoville[smallest]];

//         // 현재 인덱스 값을 가장 작은 값의 인덱스로 넣기
//         index = smallest;
//     }
// }

//================두번째 실패==================//
// let scoville = [1, 2, 3, 9, 10, 12];
// let min = 0;
// let K = 7;
// let mixed = 0;
// let cnt = 0;
// // 배열을 정렬한다.
// // 배열의 최소값이 K 미만일 때 섞는다
// // 최소값과 두번째 최소값을 꺼내서 계산
// // 스코빌 배열 뒤에 넣는다.
// // 최소 힙 구현해서 정렬. 맨 앞 인덱스를 min으로 정의
// // 배열의 최소값이 K 미만이면 또 섞는다
// // 최소값과 두번째 최소값을 계산해서 스코빌 배열에 넣는다.
// // 배열의 최소값이 K 이상일 때까지 반복한다.

// scoville.sort((a, b) => a-b);

// min = scoville[0];
// console.log(min);

// while(min < K){
//     // 배열에 남아있는 개수가 2미만이면 -1 리턴
//     if(scoville.length < 2) return -1;

//     let min1 = scoville.shift();
//     let min2 = scoville.shift();
    
//     mixed = min1 + (min2*2);
    
//     scoville.push(mixed);

//     // heapifyup 구현해보기
//     // 추가된 값 인덱스
//     let insertedIdx = scoville.length -1;

//     // insertedIdx가 0(루트)으로 올라갈 때까지 반복
//     while(insertedIdx > 0){
//         // 추가된 값 인덱스의 부모 인덱스
//         let parentIdx = Math.floor((insertedIdx - 1)/2);

//         // 부모값이랑 현재값 비교해서 부모가 작거나 같으면 break
//         if(scoville[parentIdx] <= scoville[insertedIdx]) break;

//         // 부모가 크면 자리 바꾸기
//         [scoville[insertedIdx], scoville[parentIdx]] = [scoville[parentIdx], scoville[insertedIdx]];

//         // insertedIdx 값을 부모 인덱스로 변경
//         insertedIdx = parentIdx;
//     }

//     // min을 맨 앞 인덱스(최소값)로 정의
//     min = scoville[0];
//     // 섞는 횟수 카운팅
//     cnt++
// }

// console.log(scoville);
// console.log(cnt);


//================첫번째 실패==================//
// let scoville = [1, 2, 3, 9, 10, 12];
// let min = 0;
// let K = 7;
// let mixed = 0;
// let cnt = 0;
// // 배열의 최소값이 K 미만일 때 섞는다
// // 최소값과 두번째 최소값을 계산해서 스코빌 배열에 넣는다.
// // 배열의 최소값이 K 미만이면 또 섞는다
// // 최소값과 두번째 최소값을 계산해서 스코빌 배열에 넣는다.
// // 배열의 최소값이 K 이상일 때까지 반복한다.

// min = Math.min(...scoville);
// console.log(min);

// while(min < K){
//     scoville.sort((a, b) => a-b);
//     mixed = scoville[0] + (scoville[1]*2);
//     scoville.splice(0,2);
//     scoville = [...scoville, mixed];
//     cnt++

//     min = Math.min(...scoville);
//     console.log(min);
// }

// console.log(scoville);
// console.log(cnt);