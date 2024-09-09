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

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    // Convert an array into a heap
    heapify(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

// Usage example
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(6);
minHeap.insert(5);
minHeap.insert(2);
minHeap.insert(4);

console.log(minHeap.extractMin()); // 1
console.log(minHeap.extractMin()); // 2
console.log(minHeap.extractMin()); // 3
console.log(minHeap.peek());  