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
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }
//     searchWord(prefix) {
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

// const t = new Trie();

// t.insert("apple");
// t.insert("bat");
// t.insert("bike");
// t.insert("aeroplane");
// t.insert("cat");
// t.insert("car");
// t.insert("dog");
// console.log(t.searchWord("appl"));


//Bst

// class TrieNode{
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
//         let newNode = new TrieNode(value);
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
//                 return this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right == null) {
//                 node.right = newNode;
//             } else {
//                 return this.insertNode(node.right,newNode)
//             }
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
//             //Node have no children
//             if (node.left == null && node.right == null) {
//                 node = null;
//                 return node;
//             }

//             //node have one child;

//             if (node.left == null) {
//                 node = node.right;
//                 return node;
//             } else if (node.right == null) {
//                 node = node.left;
//                 return node;
//             }

//             //node have two children

//             if (node.right != null && node.left != null) {
//                 let minNode = this.findMinNode(node.right);
//                 node.value = minNode.value;

//                 node.right = this.deleteNode(node.right, minNode.value);
//                 return node;

//             }
//         }

//     }
//     findMinNode(node){
//         if (node.left == null) {
//             return node;
//         } else {
//            return this.findMinNode(node.left);
//         }
//     }
    
    


//     inOrder(node = this.root) {
//         if (node != null) {
//             this.inOrder(node.left);
//             this.inOrder(node.right);
//             console.log(node.value)
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


//selection sort

let arr = [2, 4, 7, 1, 3, 8];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}
selectionSort(arr);
console.log(arr);

//insertion sort

let a = [4, 2, 7, 5, 9, 1];

for (let i = 1; i < a.length; i++){
    let temp = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > temp) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = temp;
}
console.log(a);

//bubble sort

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log(arr);

//Quick sort

function quickSort(a) {
    if (a.length <= 1) {
        return a;
    }
    let pivot = a[0];
    let left = [];
    let right = [];
    for (let i = 1; i < a.length; i++){
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
quickSort(a);
console.log(a);



