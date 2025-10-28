class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        const length = this.heap.length;
        while (2 * index + 1 < length) {
            let smallest = 2 * index + 1;
            const right = 2 * index + 2;

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (this.heap[index] <= this.heap[smallest]) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
 function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(s => heap.insert(s));

    let count = 0;

    while (heap.peek() < K) {
        if (heap.size() < 2) return -1;

        const first = heap.remove();
        const second = heap.remove();
        const newFood = first + second * 2;

        heap.insert(newFood);
        count++;
    }

    return count;
}

console.log(solution([10,8,9,7,7,6,5, 4, 3, 2, 1], 7));
