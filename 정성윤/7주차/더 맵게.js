/*
매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다.
모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 
Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

섞은 음식의 스코빌 지수 = 
가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때,
 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return
*/
function solution(scoville, K) {
    var answer = 0;
    scoville.sort((a, b) => a - b);

    while(scoville[0]<K){
        let a = scoville.shift()
        let b = scoville.shift()
        scoville.push(a+2*b)
        scoville.sort((a, b) => a - b);
        answer += 1
    }
    return scoville[0] >= K ? answer: -1;
}
console.log(solution([1, 2, 3, 9, 10, 12],7));

/*
정렬...?
scoville	            K	return
[1, 2, 3, 9, 10, 12]	7	2


// # 최소 힙 구현
class MinHeap {
  constructor(arr = []) {
    this.h = arr.slice();                 // # 내부 배열 복사
    if (this.h.length) this._heapify();   // # O(n)로 힙 구성
  }
  size() { return this.h.length; }        // # 힙 크기
  peek() { return this.h[0]; }            // # 최솟값 조회
  push(x) {                               // # 삽입 O(log n)
    this.h.push(x);
    this._up(this.h.length - 1);
  }
  pop() {                                 // # 최솟값 제거 O(log n)
    if (!this.h.length) return undefined;
    const min = this.h[0];
    const last = this.h.pop();
    if (this.h.length) {
      this.h[0] = last;
      this._down(0);
    }
    return min;
  }
  _parent(i) { return (i - 1) >> 1; }     // # 부모 인덱스
  _left(i) { return (i << 1) + 1; }       // # 왼쪽 자식
  _right(i) { return (i << 1) + 2; }      // # 오른쪽 자식
  _swap(i, j) { [this.h[i], this.h[j]] = [this.h[j], this.h[i]]; } // # 교환
  _up(i) {                                // # 위로 올리기
    while (i > 0) {
      const p = this._parent(i);
      if (this.h[p] <= this.h[i]) break;
      this._swap(p, i);
      i = p;
    }
  }
  _down(i) {                              // # 아래로 내리기
    const n = this.h.length;
    while (true) {
      let m = i, l = this._left(i), r = this._right(i);
      if (l < n && this.h[l] < this.h[m]) m = l;
      if (r < n && this.h[r] < this.h[m]) m = r;
      if (m === i) break;
      this._swap(i, m);
      i = m;
    }
  }
  _heapify() {                            // # 배열 → 힙 (하향식)
    for (let i = (this.h.length >> 1) - 1; i >= 0; i--) this._down(i);
  }
}

// # 스코빌 지수 문제 (최소 힙 사용: O(n log n))
function solution(scoville, K) {
  const heap = new MinHeap(scoville);     // # 초기 힙 구성
  let answer = 0;                         // # 혼합 횟수

  if (heap.size() === 0) return -1;       // # 빈 배열 예외

  // # 최솟값이 K 미만이면 계속 섞기 (원소 2개 이상 필요)
  while (heap.size() >= 2 && heap.peek() < K) {
    const a = heap.pop();                 // # 최솟값
    const b = heap.pop();                 // # 두 번째 최솟값
    heap.push(a + 2 * b);                 // # 혼합 후 삽입
    answer++;                             // # 횟수 +1
  }

  // # 최종 최솟값이 K 이상이면 성공, 아니면 불가능
  return heap.peek() >= K ? answer : -1;
}

// # 테스트
console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
*/