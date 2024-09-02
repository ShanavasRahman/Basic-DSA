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