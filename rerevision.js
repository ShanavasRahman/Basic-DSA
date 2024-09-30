// //Graph


// class Graph{
//     constructor() {
//         this.adjList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex] = [];
//         }
//     }
//     addEdge(v1, ...vertices) {
//         for (let vertex of vertices) {
//             if (this.adjList[v1] && this.adjList[vertex]) {
//                 this.adjList[v1].push(vertex);
//                 this.adjList[vertex].push(v1);
//             }
//         }
//     }

//     bfs(startingVertex) {
//         let queue = [startingVertex];
//         let visited = {};
//         visited[startingVertex] = true;
//         while (queue.length > 0) {
//             let currentVertex = queue.shift();
//             console.log(currentVertex);
//             this.adjList[currentVertex].forEach(neighbour => {
//                 if (!visited[neighbour]) {
//                     visited[neighbour] = true;
//                     queue.push(neighbour);
//                 }
//             });
//         }
//     }



//     dfs(startingVertex) {
//         let stack = [startingVertex];
//         let visited = {};
//         visited[startingVertex] = true;
//         while (stack.length > 0) {
//             let currentVertex = stack.pop();
//             console.log(currentVertex);
//             this.adjList[currentVertex].forEach((neighbour) => {
//                 if (!visited[neighbour]) {
//                     visited[neighbour] = true;
//                     stack.push(neighbour);
//                 }
//             })
//         }
//     }
//     print() {
//         for (let vertex in this.adjList) {
//             console.log(`${vertex}-->${this.adjList[vertex].join(',')}`);
//         }
//     }

// }

// let graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addEdge("A", "B","c");
// graph.addEdge("B", "C");
// graph.addEdge("C", "D","A");
// graph.addEdge("D", "E");
// graph.addEdge("E", "A");
// graph.print();
// // graph.bfs("A");
// graph.dfs("A");










