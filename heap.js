class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper methods to get the parent and children indices
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap elements in the heap
    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  
    // Insert a new element into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Maintain the heap property after insertion
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[index] > this.heap[parentIndex]) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Remove and return the maximum element (root)
    extractMax() {
      if (this.heap.length === 0) {
        throw new Error("Heap is empty");
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return max;
    }
  
    // Maintain the heap property after extraction
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
  
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let largest = index;
  
        if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
          largest = leftChildIndex;
        }
  
        if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
          largest = rightChildIndex;
        }
  
        if (largest !== index) {
          this.swap(index, largest);
          index = largest;
        } else {
          break;
        }
      }
    }
  
    // Helper method to display the heap
    printHeap() {
      console.log(this.heap);
    }
  }
  
  // Example usage:
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(20);
  maxHeap.insert(5);
  maxHeap.insert(30);
  maxHeap.insert(25);
  maxHeap.printHeap();
  
  console.log("Max:", maxHeap.extractMax());
  maxHeap.printHeap();
  