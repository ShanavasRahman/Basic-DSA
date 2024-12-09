class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;  
        }
    }
    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current=current.next
        }
    }
}

const list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.reverse()
list.print()