// Linked List

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
//         let newNode = new Node(value)
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     append(value) {
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
        this.adjList = {};
    }

    addVertices(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    addEdges(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].push(vertex2);
            this.adjList[vertex2].push(vertex2);
        }
    }
    
}


const g = new Graph();
g.addVertices("A")
g.addVertices("B")
g.addVertices("C")
g.addVertices("D")
g.addEdges("A", "B");
g.addEdges("B", "C");
g.addEdges("C", "D");
g.addEdges("D", "A");

g.bfs("A");











