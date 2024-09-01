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

class Graph{
    constructor() {
        this.adjList={}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex, ...vertices) {
        if (this.adjList[vertex]) {
            for (let otherVertex of vertices) {
                this.adjList[vertex].push(otherVertex);
                this.adjList[otherVertex].push(vertex);
            }
        }
    }
}



