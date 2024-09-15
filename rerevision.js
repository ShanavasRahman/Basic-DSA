// //Linked List

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const newNode = new Node(data);

//     if (this.head == null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   prepend(data) {
//     const newNode = new Node(data);
//     if (this.head == null) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//     deleteNode(target) {
//       if (this.head.data == target) {
//           this.head = this.head.next;
//           return
//         } else {
//           let current = this.head;
//           let prev = null;
//           while (current) {
//               if (current.data == target) {
//                   prev.next = current.next;
//                   return;
//               }
//               prev = current;
//               current = current.next
//           }
//     }

   
//   }
//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.deleteNode(20);
// list.print();


// // ***************************Graph

// class Graph{
//   constructor() {
//     this.adjList = {};
//   }

//   addVertex(vertex) {
//     if (!this.adjList[vertex]) {
//       this.adjList[vertex] = [];
//     }
//   }

//   addEdge(vertex1, vertex2) {
//     if (this.adjList[vertex1] && this.adjList[vertex2]) {
//       this.adjList[vertex1].push(vertex2);
//       this.adjList[vertex2].push(vertex1);
//     }
//   }

//   print() {
//     for (let vertex in this.adjList) {
//       console.log(`${vertex}-->${this.adjList[vertex].join(',')}`);
//     }
//   }

//   bfs(startingVertex) {
//     const queue = [startingVertex];
//     const visited = {};
//     visited[startingVertex] = true;
//     while (queue.length > 0) {
//       const currentVertex = queue.shift();
//       console.log(currentVertex);
//       this.adjList[currentVertex].forEach(neighbour => {
//         if (!visited[neighbour]) {
//           visited[neighbour] = true;
//           queue.push(neighbour);
//         }
//       });
//     }
//   }

//   dfs(startingVertex) {
//     const stack = [startingVertex];
//     const visited = {};
//     visited[startingVertex] = true;
//     while (stack.length > 0) {
//       const currentVertex = stack.pop();
//       console.log(currentVertex);
//       this.adjList[currentVertex].forEach(neighbour => {
//         if (!visited[neighbour]) {
//           visited[neighbour] = true;
//           stack.push(neighbour);
//         }
//       });
//     }
//   }

//   deleteVertex(target) {
//     for (let key in this.adjList) {
//       this.adjList[key]=this.adjList[key].filter(v=>v!=target)
//     }
//     delete this.adjList[target];
//   }
// }


// const g = new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addEdge("A", "B");
// g.addEdge("B", "C");
// g.addEdge("C", "D");
// g.addEdge("D", "E");
// g.addEdge("E", "A");
// g.print()
// g.deleteVertex("A");
// g.print()





