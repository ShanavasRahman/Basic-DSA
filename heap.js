class MinHeap {
  constructor() {
      this.heap = [];
  }

  // Get the index of the parent of the element at index i
  parentIndex(i) {
      return Math.floor((i - 1) / 2);
  }
   // Get the index of the left child of the element at index i
   leftChildIndex(i) {
    return 2 * i + 1;
}

// Get the index of the right child of the element at index i
rightChildIndex(i) {
    return 2 * i + 2;
}

// Swap two elements in the heap
swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
}

// Insert a new element into the heap
insert(key) {
    this.heap.push(key);
    this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0 && this.heap[this.parentIndex(i)] > this.heap[i]) {
            this.swap(i, this.parentIndex(i));
            i = this.parentIndex(i);
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }
    heapifyDown(i) {
        let smallest = i;
        const left = this.leftChildIndex(i);
        const right = this.rightChildIndex(i);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }