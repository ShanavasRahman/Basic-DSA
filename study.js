//Trie

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
//                 node.children[char]=new TrieNode()
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     startWith(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (node.children[char] && node.isEndOfWord==true) {
//                 return true
//             }
//             node=node.children[char]
//         }
//         return false;
//     }

// }

// const trie = new Trie();

// trie.insert("apple");
// trie.insert("bat");
// trie.insert("app");
// trie.insert("ice");
// trie.insert("bet");
// console.log(trie.startWith("appl"));


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
//         let newNode=new TreeNode(value)
//         if (this.root == null) {
//             this.root = newNode;
//         } else {
//             return this.insertNode(this.root, newNode);
//         }
//     }
//     insertNode(node, newNode) {
//         if (node.value < newNode.value) {
//             if (node.left==null) {
//                 node.left=newNode
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right == null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
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
// bst.inOrder()


//Graph

class Graph{
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        if (this.adjList[v1] && this.adjList[v2]) {
            this.adjList[v1].push(v2);
            this.adjList[v2].push(v1);
        }
    }
    deleteVertex(target) {
        for (let key in this.adjList) {
            this.adjList[key] = this.adjList[key].filter(v => v != target);
        }
        delete this.adjList[target];
    }
    print() {
        for (let vertex in this.adjList) {
            console.log(`${vertex}-->${this.adjList[vertex].join(",")}`);
        }
    }

}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "E");
g.addEdge("E", "A");
g.deleteVertex("A")
g.print();