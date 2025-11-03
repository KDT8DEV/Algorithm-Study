//
function solution1(scoville, K) {
  const arr = [...scoville].sort((a, b) => a - b);
  if (arr[0] >= K) return 0;

  let cmp = 0;
  while (arr.length >= 2 && arr[0] < K) {
    const a = arr.shift();  
    const b = arr.shift();  
    const c = a + 2 * b;
    arr.push(c);
    arr.sort((x, y) => x - y);
    cmp++;
  }
  return arr.length && arr[0] >= K ? cmp : -1;
}


[5,4,156,8]
4,5
[2,3]
[8]

// 효율성 안조음

// 지피티한테 부탁햇서요
/**
 * 문제 요약
 * - 스코빌 지수 배열에서 가장 순한 두 개를 꺼내 섞어 새 음식을 만들고,
 *   모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복한다.
 * - 섞는 공식: new = 가장 순한 a + (두 번째로 순한 b * 2)
 * - 최소 몇 번 섞어야 하는지 구하고, 불가능하면 -1을 반환.
 *
 * 핵심 아이디어
 * - "가장 작은 두 개"를 매번 빠르게 뽑아야 하므로 최소 힙(우선순위 큐)을 사용.
 * - 최소 힙 연산
 *   - 초기 힙 구성: O(n)
 *   - push / pop: O(log n)
 * - 전체 시간 복잡도: 대략 O(n log n)에 수렴(실전에서 통과 가능한 수준)
 */

/**
 * 최소 힙 구현 (배열 기반 이진 힙)
 * - 부모 인덱스: p = Math.floor((i - 1) / 2)
 * - 왼쪽 자식: l = i * 2 + 1
 * - 오른쪽 자식: r = i * 2 + 2
 */
class MinHeap {
  constructor(arr = []) {
    // 내부 저장소
    this.h = [];
    if (arr.length) {
      // 초기 배열로 힙을 만들고 O(n)으로 heapify
      this.h = arr.slice();
      this._heapify();
    }
  }

  // 현재 힙의 원소 개수
  size() {
    return this.h.length;
  }

  // 최소값 확인 (제거하지 않음)
  peek() {
    return this.h[0];
  }

  // 값 삽입: 끝에 넣고 위로 끌어올리기 (sift-up)
  push(val) {
    this.h.push(val);
    this._siftUp(this.h.length - 1);
  }

  // 최소값 제거: 루트 제거 후 마지막 원소를 루트로 올리고 아래로 내려보내기 (sift-down)
  pop() {
    if (this.h.length === 0) return undefined;
    const top = this.h[0];
    const last = this.h.pop();
    if (this.h.length > 0) {
      this.h[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  // 초기 힙 구성: 마지막 내부 노드부터 내려보내기
  _heapify() {
    for (let i = Math.floor(this.h.length / 2) - 1; i >= 0; i--) {
      this._siftDown(i);
    }
  }

  // 위로 끌어올리기: 부모보다 작으면 스왑 반복
  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }

  // 아래로 내려보내기: 두 자식 중 더 작은 쪽과 비교해 내려감
  _siftDown(i) {
    const n = this.h.length;
    while (true) {
      let smallest = i;
      const l = i * 2 + 1;
      const r = i * 2 + 2;

      if (l < n && this.h[l] < this.h[smallest]) smallest = l;
      if (r < n && this.h[r] < this.h[smallest]) smallest = r;

      if (smallest === i) break; // 더 이상 내려갈 곳 없음
      [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
      i = smallest;
    }
  }
}

/**
 * 메인 솔루션
 * 1) 모든 스코빌 값으로 최소 힙 구성
 * 2) 힙의 최솟값이 K 이상이면 0 반환
 * 3) 아니면 다음을 반복:
 *    - 최솟값 a, 그다음 최솟값 b 꺼내서 c = a + 2*b 계산
 *    - c를 힙에 삽입
 *    - 섞은 횟수 +1
 * 4) 더 이상 2개 이상 추출이 불가하거나(힙 크기 < 2), 최솟값이 K 이상이 되면 종료
 * 5) 최솟값이 K 이상이면 섞은 횟수, 아니면 -1 반환
 *
 * 엣지 케이스
 * - K <= 0이면 이미 조건 만족 → 0
 * - 섞다 보니 힙에 원소가 1개만 남고 여전히 K 미만 → 더 섞을 수 없음 → -1
 */
function solution(scoville, K) {
  // K가 0 이하라면 모든 음식이 이미 K 이상으로 간주
  if (K <= 0) return 0;

  const heap = new MinHeap(scoville);
  let mixes = 0;

  // 힙에 최소 2개가 있어야 "두 개를 섞기"가 가능
  while (heap.size() >= 2 && heap.peek() < K) {
    const a = heap.pop();      // 가장 순한
    const b = heap.pop();      // 두 번째로 순한
    const mixed = a + 2 * b;   // 새 스코빌
    heap.push(mixed);          // 다시 힙에 넣기
    mixes++;
  }

  // 종료 후 판정: 남은 최솟값이 K 이상인지 확인
  return heap.size() > 0 && heap.peek() >= K ? mixes : -1;
}

/* 사용 예시
console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
*/