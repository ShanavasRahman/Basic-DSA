// class Node{
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head = null;
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
//     reverse() {
//         let current = this.head;
//         let prev=null;
//         while (current) {
//             let next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }
//     deleteDuplicate() {
//         let current = this.head;
//         while (current) {
//             let currentValue = current.data;
//             let next = current.next
//             let prev = current;
//             while (next) {
//                 if (currentValue === next.data) {
//                     prev.next = next.next;
//                 } else {
//                     prev = next
                    
//                 }
//                 next=next.next
//             }
//             current = current.next;
//         }
//     }
//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// const list = new LinkedList();
// list.append(1)
// list.append(2)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(4)
// list.reverse()
// // list.deleteDuplicate()
// list.print()


// // class Graph{
// //     constructor() {
// //         this.adjList = {};
// //     }
// //     addVertex(vertex) {
// //         if (!this.adjList[vertex]) {
// //             this.adjList[vertex] = [];
// //         }
// //     }
// //     addEdge(vertex1, vertex2) {
// //         if (this.adjList[vertex1] && this.adjList[vertex2]) {
// //             this.adjList[vertex1].push(vertex2);
// //             this.adjList[vertex2].push(vertex1);
// //         }
// //     }

// //     dfs(startingVertex) {
// //         let stack = [startingVertex];
// //         let visited = {};
// //         visited[startingVertex] = true;
// //         while (stack.length > 0) {
// //             const currentVertex = stack.pop();
// //             console.log(currentVertex);
// //             this.adjList[currentVertex].forEach(neighbour => {
// //                 if (!visited[neighbour]) {
// //                     visited[neighbour] = true;
// //                     stack.push(neighbour);
// //                 }
// //             });
// //         }
// //    }
// //     print() {
// //         for (let vertex in this.adjList) {
// //             console.log(`${vertex}--->${this.adjList[vertex].join(",")}`)
// //         }
// //     }
// // }

// // const graph = new Graph;
// // graph.addVertex("A")
// // graph.addVertex("B")
// // graph.addVertex("C")
// // graph.addVertex("D")

// // graph.addEdge("A", "B");
// // graph.addEdge("B", "C");
// // graph.addEdge("C", "D");
// // graph.addEdge("D", "A");

// // graph.dfs("A")

// class TrieNode{
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie{
//     constructor() {
//         this.root = new TrieNode();
//     }
//     insertWord(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char]=new TrieNode()
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }
//     search(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }

// const trie = new Trie();

// trie.insertWord("apple");
// console.log(trie.search("apple"));


//selection sort

// let arr = [3, 5, 6, 2, 7, 4];

// for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
// }
// console.log(arr);

//bubble sort
// let arr = [3, 5, 6, 2, 7, 4];

// for (let i = 0; i < arr.length; i++){
//     for (j = 0; j < arr.length; j++){
//         if (arr[j] > arr[j+1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr)

//Insertion sort

// for (let i = 1; i < arr.length; i++){
    //     let temp = arr[i];
    //     let j = i - 1;
    //     while (j >= 0 && arr[j] > temp) {
        //         arr[j + 1] = arr[j];
        //         j--;
        //     }
        //     arr[j + 1] = temp;
        // }
        // console.log(arr);
        
// let arr = [5, 3, 6, 2, 7, 4];

// for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[min] > arr[j]) {
//             min = j;
//         }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
// }
// console.log(arr);


//quick sort




