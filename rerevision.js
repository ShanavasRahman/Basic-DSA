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








