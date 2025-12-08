class MinHeap {
    constructor(arr = []) {
        this.heap = [];
        arr.forEach(v => this.push(v));
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }
    _bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let smallest = idx;
            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

function solution(ability, number) {
    const heap = new MinHeap(ability);
    for (let i = 0; i < number; i++) {
        let a = heap.pop();
        let b = heap.pop();
        heap.push(a + b);
        heap.push(a + b);
    }
    return heap.heap.reduce((acc, cur) => acc + cur, 0);
}