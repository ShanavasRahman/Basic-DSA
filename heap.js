class Heap{
    constructor() {
        this.heap = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChild(index) {
        return 2 * index + 1;
    }
    getRightChild(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }


    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = this.getParent(index);
        // In a max-heap, we check if the current node is greater than the parent
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);  // Swap the current node with the parent
            index = parentIndex;  // Move up to the parent's position
            parentIndex = this.getParent(index);  // Get the parent's parent index
        }
    }
    
}