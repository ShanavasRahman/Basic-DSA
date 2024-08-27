

//************************************** Stack Using Array



// class Stack{
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         this.items.pop();
//     }

//     peek(){
//         return this.items[this.items.length - 1];
//     }

//     print() {
//         console.log(this.items);
//     }

// }

// let sample = new Stack();

// sample.push(10)
// sample.push(20)
// sample.push(30)
// console.log(sample.peek());
// sample.print();



//************************************** Stack Using Linkedlist

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
       
    }

    peek() {
        console.log(this.tail.data);
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const list = new LinkedList();

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.pop();
// list.print();
