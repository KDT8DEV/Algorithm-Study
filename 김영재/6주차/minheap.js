class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 부모, 자식 인덱스 계산
    // i = 1 → 부모 = Math.floor((1 - 1) / 2) = 0
    // i = 4 → 부모 = Math.floor((4 - 1) / 2) = 1
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    // 값 교환
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // 삽입
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)] > this.heap[index]
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    // 최소값 제거
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); 
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        //다음 자식 인덱스를 찾는데 없으면 종료
        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (//두 자식중 더 작은 값을 찾기
                rightChildIndex < length &&
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]
            ) {
                smallerChildIndex = rightChildIndex;
            }
            
            if (this.heap[index] <= this.heap[smallerChildIndex]) break;

            this.swap(index, smallerChildIndex);//부모가 사라졌으니 그 아래 자식중 더 작은 값을 위로 올림
            index = smallerChildIndex;
        }
    }

    // 현재 최소값 확인
    peek() {
        return this.heap[0] || null;
    }

    // 힙 상태 출력
    print() {
        console.log(this.heap);
    }
}

const heap = new MinHeap();

heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(8);

heap.print(); // [3, 8, 5, 10]

console.log(heap.remove()); // 3
heap.print(); // [5, 8, 10]

