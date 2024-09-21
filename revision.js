//***********************************Linked List


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

//   reverse() {
//     let current = this.head;
//     let prev = null;
//     while (current) {
//       let next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     this.head = prev;
//   }

//   delete(target) {
//     let current = this.head;
//     let prev = null;
//     if (this.head.data == target) {
//       this.head = this.head.next;
//       return;
//     }
//     while (current) {
//       if (current.data == target) {
//         prev.next = current.next;
//         return;
//       }
//       prev = current;
//       current = current.next;
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
// list.reverse();
// list.delete(50);
// list.print();




//***************************************Binary search tree



// class TreeNode{
//     constructor(value) {
//         this.left = null;
//         this.value = value;
//         this.right = null;
//     }
// }

// class BST{
//     constructor(){
//     this.root = null;
//     }

//     insert(value) {
//         let newNode = new TreeNode(value);
//         if (this.root == null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(node, newNode) {
//         if (newNode.value < node.value) {
//             if (node.left == null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else if (newNode.value > node.value) {
//             if (node.right == null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     delete(target) {
//         return this.deleteNode(this.root, target);
//     }

//     deleteNode(node, target) {
//         if (target < node.value) {
//             node.left = this.deleteNode(node.left, target);
//             return node
//         } else if (target > node.value) {
//             node.right = this.deleteNode(node.left, target);
//             return node
//         } else {

//             //if the target node is a leaf node
//             if (node.left == null && node.right == null) {
//                 node = null;
//                 return node;
//             }

//             // if the target node have one child
//             if (node.left == null) {
//                 node = node.right;
//                 return node;
//             } else if (node.right == null) {
//                 node = node.left;
//                 return node;
//             }


//             //if the target have two children

//             if (node.right !== null && node.left !== null) {
//                 let minNode = this.findMinNode(node.right);
//                 node.value = minNode.value;
            

//                 //deleting the successor
//                 node.right = this.deleteNode(node.right, minNode.value);
//                 return node;
//             }
//         }

//     }
    
//     findMinNode(node){
//     if (node.left == null) {
//             return node;
//         } else {
//         return this.findMinNode(node.left);
        
//         }
//     }


//     preOrder(node=this.root) {
//         if (node != null) {
//             console.log(node.value);
//             this.preOrder(node.left);
//             this.preOrder(node.right);
//         }
//     }
// }


// const bst = new BST();
// bst.insert(10)
// bst.insert(8)
// bst.insert(20)
// bst.insert(6)
// bst.insert(9);
// bst.insert(15)
// bst.insert(5)
// bst.insert(30);
// bst.delete(8);

// bst.preOrder();



//***************************************Graph

// class Graph{
//     constructor() {
//         this.adjList={}
//     }

//     addVertex(vertex) {
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex] = [];
//         }
//     }

//     addEdge(vertex, ...vertices) {
//         for (let otherVertex of vertices) {
//             if (this.adjList[vertex] && this.adjList[otherVertex]) {
//                 this.adjList[vertex].push(otherVertex);
//                 this.adjList[otherVertex].push(vertex);
//             }
//         }
//     }


//     bfs(startingVertex) {
//         const queue = [startingVertex];
//         const visited = {};
//         visited[startingVertex] = true;
//         while (queue.length > 0) {
//             const currentVertex = queue.shift();
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
//         const stack = [startingVertex];
//         const visited = {};
//         while (stack.length > 0) {
//             const currentVertex = stack.pop();
//             if (!visited[currentVertex]) {
//                 visited[currentVertex] = true;
//                 console.log(currentVertex);
//                 this.adjList[currentVertex].forEach((neighbour) => {
//                     if (!visited[neighbour]) {
//                         stack.push(neighbour);
//                     }
//                 })
//             }
            
//         }
//     }

//     deleteVertex(vertex) {
//         for (let key in this.adjList) {
//             this.adjList[key]=this.adjList[key].filter(v => v != vertex);
//         }
//         delete this.adjList[vertex];
//     }


//     print() {
//         console.log(this.adjList)
//         for (let vertex in this.adjList) {
//             console.log(`${vertex}-->${this.adjList[vertex].join(",")}`)
//         }
//     }
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

// g.deleteVertex("A");
// g.print();


//*************************************Trie

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

//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     wordSearch(prefix) {
//         let node = this.root
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }




// const t = new Trie();

// t.insert("apple");
// t.insert("bat");
// t.insert("bike");
// t.insert("aeroplane");
// t.insert("cat");
// t.insert("car");
// t.insert("dog");

// console.log(t.wordSearch("apple"));


//*********************Selection sort

// let arr = [5, 6, 3, 8, 2];
// for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i+1; j < arr.length; j++){
//         if (arr[j] < arr[min]) {
//             min=j
//         }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
// }
// console.log(arr);


//insertion sort

// let arr = [5, 6, 3, 8, 2];
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


//bubble sort

// let arr = [5, 6, 3, 8, 2];
// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr.length - i; j++){
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr);

//quick sort
let arr = [5, 6, 3, 8, 2];

function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }

    return [...quick(left),pivot,...quick(right)];
    
}

console.log(quick(arr));




