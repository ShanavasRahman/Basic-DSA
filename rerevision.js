//Linked List


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

    append(data) {
        const newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
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
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print()