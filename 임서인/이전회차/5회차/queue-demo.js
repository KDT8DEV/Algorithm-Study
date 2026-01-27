// Queue 데모: add, remove, peek, isEmpty, size + 응용(BFS, 이동 평균)
// 두-스택으로 큐를 구현해 shift/unshift의 O(n) 비용을 피합니다.

// ================================
// Queue 구현 (요청 형식: add/remove)
// ================================
class Queue {
  constructor() {
    this._in = []; // 뒤(rear)에 쌓는 스택
    this._out = []; // 앞(front)에서 꺼내는 스택
  }
  // add(item): 뒤(rear)에 추가
  add(item) {
    this._in.push(item);
  }
  // 내부 스택 전환(필요할 때만): amortized O(1)
  _shiftStacks() {
    if (this._out.length === 0) {
      while (this._in.length) this._out.push(this._in.pop());
    }
  }
  // remove(): 앞(front)에서 제거 및 반환 (비면 오류)
  remove() {
    this._shiftStacks();
    if (this._out.length === 0) throw new Error('Queue underflow');
    return this._out.pop();
  }
  // peek(): 앞(front) 항목 반환(제거 X)
  peek() {
    this._shiftStacks();
    return this._out.length === 0 ? undefined : this._out[this._out.length - 1];
  }
  // isEmpty(): 비어있으면 true
  isEmpty() {
    return this._in.length + this._out.length === 0;
  }
  // size(): 요소 개수
  size() {
    return this._in.length + this._out.length;
  }
  // clear(): 비우기
  clear() {
    this._in.length = 0;
    this._out.length = 0;
  }
}

// ===============
// Queue 연산 예시
// ===============
console.log('=== Queue Operations Demo ===');
const q = new Queue();

console.log('isEmpty():', q.isEmpty()); // true
q.add(10);
console.log('add(10)');
q.add(20);
console.log('add(20)');
q.add(30);
console.log('add(30)');
console.log('size():', q.size()); // 3

console.log('peek():', q.peek()); // 10
console.log('remove():', q.remove()); // 10
console.log('peek():', q.peek()); // 20
console.log('size():', q.size()); // 2
console.log('isEmpty():', q.isEmpty()); // false

// ======================
// 응용 예시 1: BFS 탐색
// ======================
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: [],
};

function bfs(start) {
  const visited = new Set([start]);
  const order = [];
  const qu = new Queue();
  qu.add(start);

  while (!qu.isEmpty()) {
    const node = qu.remove(); // 큐의 front에서 꺼냄
    order.push(node);
    for (const next of graph[node] ?? []) {
      if (!visited.has(next)) {
        visited.add(next);
        qu.add(next); // 방문 예정 노드를 rear에 추가
      }
    }
  }
  return order;
}
console.log('BFS from A:', bfs('A')); // 예: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// ==================================
// 응용 예시 2: 이동 평균(슬라이딩 윈도우)
// ==================================
class MovingAverage {
  constructor(windowSize) {
    this.window = new Queue();
    this.sum = 0;
    this.windowSize = windowSize;
  }
  next(val) {
    this.window.add(val);
    this.sum += val;
    if (this.window.size() > this.windowSize) {
      this.sum -= this.window.remove(); // 오래된 값 제거
    }
    return this.sum / this.window.size();
  }
}
const ma = new MovingAverage(3);
console.log('MovingAverage(3):', [
  ma.next(1),
  ma.next(10),
  ma.next(3),
  ma.next(5),
]);
// 출력 예: [1, 5.5, 4.666..., 6]

/* 실행 예상 출력
=== Queue Operations Demo ===
isEmpty(): true
add(10)
add(20)
add(30)
size(): 3
peek(): 10
remove(): 10
peek(): 20
size(): 2
isEmpty(): false
BFS from A: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
MovingAverage(3): [ 1, 5.5, 4.666666666666667, 6 ]
*/
