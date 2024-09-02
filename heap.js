class MinHeap {
  constructor() {
      this.heap = [];
  }

  // Get the index of the parent of the element at index i
  parentIndex(i) {
      return Math.floor((i - 1) / 2);
  }
  