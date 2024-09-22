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

// class Graph{
//     constructor() {
//         this.adjList={}
//     }

//     addVertices(vertex) {
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex] = [];
//         }
//     }
//     addEdges(v1, v2) {
//         if (this.adjList[v1] && this.adjList[v2]) {
//             this.adjList[v1].push(v2);
//             this.adjList[v2].push(v1);
//         }
//     }
//     bfs(startingVertex) {
//         let q = [startingVertex];
//         let visited = {};
//         visited[startingVertex] = true;
//         while (q.length > 0) {
//             let currentVertex = q.shift();
//             console.log(currentVertex);
//             if (this.adjList[currentVertex]) {
//                 this.adjList[currentVertex].forEach(neighbour => {
//                     if (!visited[neighbour]) {
//                         q.push(neighbour);
//                         visited[neighbour] = true;
//                     }
//                 });
//             }
//         }
//     }

// }

// const g = new Graph();
// g.addVertices("A")
// g.addVertices("B")
// g.addVertices("C")
// g.addVertices("D")
// g.addEdges("A", "B");
// g.addEdges("B", "C");
// g.addEdges("C", "D");
// g.addEdges("D", "A");

// g.bfs("A");


//bst


// class TreeNode{
//     constructor(value) {
//         this.left = null;
//         this.value = value;
//         this.right = null;
//     }
// }

// class Bst{
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         let newNode = new TreeNode(value);
//         if (this.root == null) {
//             this.root = newNode;
//         } else {
//             return this.insertNode(this.root, newNode);
//         }
//     }
//     insertNode(node, newNode) {
//         if (newNode.value < node.value) {
//             if (node.left == null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left,newNode)
//             }
//         } else {
//             if (node.right == null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     inOrder(node = this.root) {
//         if (node != null) {
//             this.inOrder(node.left);
//             console.log(node.value);
//             this.inOrder(node.right);
//         }
//     }

//     delete(target) {
//         return this.deleteNode(this.root, target);
//     }

//     deleteNode(node, target) {
//         if (target < node.value) {
//             node.left = this.deleteNode(node.left, target);
//             return node;
//         } else if (target > node.value) {
//             node.right = this.deleteNode(node.right, target);
//             return node;
//         } else {
//             //target has no children
//             if (node.left == null && node.right == null) {
//                 node = null;
//                 return node;
//             }

//             //one child
//             if (node.left == null) {
//                 node = node.right;
//                 return node;
//             } else if (node.right == null) {
//                 node = node.left;
//                 return node;
//             }

//             //two children

//             if (node.right !== null && node.left !== null) {
//                 let minNode = this.findMinNode(node.right);
//                 node.value = minNode.value;

//                 node.right = this.deleteNode(node.right, minNode);
//                 return node;
//             }
//         }
//     }
//     findMinNode(node){
//         if (node.left == null) {
//             return node;
//         } else {
//             return this.findMinNode(node.left);
//         }
//     }
// }


// const bst = new Bst();
// bst.insert(10)
// bst.insert(8)
// bst.insert(20)
// bst.insert(6)
// bst.insert(9);
// bst.insert(15)
// bst.insert(5)
// bst.insert(30);
// bst.delete(8);

// bst.inOrder();


//trie

// class TrieNode{
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie{
//     constructor() {
//         this.root=new TrieNode()
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
//     search(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false
//             } else {
//                 node=node.children[char]
//             }
//         }
//         return true;
//     }
// }

// const t = new Trie();

// t.insert("apple");
// t.insert("bat");
// t.insert("bakery");
// t.insert("aeroplane");
// t.insert("cat");
// t.insert("car");
// t.insert("dog");

// console.log(t.search("app"));


// class Heap{
//     constructor() {
//         this.heap = [];
//     }
//     getParent(index) {
//         return Math.floor((index - 1) / 2);
//     }
//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }
//     heapifyUp(index) {
//         let parentIndex = this.getParent(index);
//         while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
//             this.swap(index, parentIndex);
//             index = parentIndex;
//             parentIndex = this.getParent(index);
//         }
//     }
//     print() {
//         console.log(this.heap);
//     }
// }


// const h = new Heap();
// h.insert(60);
// h.insert(65);
// h.insert(50);
// h.insert(40);
// h.insert(70);
// h.insert(35);
// h.print();


//bubble sort

// let arr = [3, 2, 5, 6, 1, 4];

// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr.length - i; j++){
//         if (arr[j + 1] < arr[j]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr);

// insertion sort

// let arr = [3, 2, 5, 6, 1, 4];

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


//selection sort
// let arr = [3, 2, 5, 6, 1, 4];

// for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i+1; j < arr.length; j++){
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
// }
// console.log(arr);


//quick sort

let arr = [3, 2, 5, 6, 1, 4];

function quickSort(arr) {
    if (!arr.length >= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(arr));





