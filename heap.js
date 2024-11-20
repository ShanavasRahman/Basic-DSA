class Heap{
    constructor() {
        this.heap = [];
    }
    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeft(index) {
        return 2 * index + 1;
    }
    getRight(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }


    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index) {
        let parentIndex = this.getParent(index);
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParent(index);
        }
    }
    
}


const h = new Heap();
h.insert(60);
h.insert(65);
h.insert(50);
h.insert(40);
h.insert(70);
h.insert(35);
h.print();


