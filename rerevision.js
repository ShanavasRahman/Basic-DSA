//Linked List

// class Node{
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     prepend(value) {
//         const newNode = new Node(value);
//         if (this.head == null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value)
//             current = current.next;
//         }
//     }
// }


// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.print()


// Graph

class Graph{
    constructor() {
        this.adjList={}
    }

    addVertices(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    print() {
        console.log(this.adjList);
    }
}

const g = new Graph();
g.addVertices("A")
g.addVertices("B")
g.addVertices("C")
g.addVertices("D")
g.print();





