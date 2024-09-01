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



class TreeNode{
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BST{
    constructor(){
    this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (newNode.value > node.value) {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(target)

    preOrder(node=this.root) {
        if (node != null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}


const bst = new BST();
bst.insert(10)
bst.insert(8)
bst.insert(20)
bst.insert(6)
bst.insert(15)
bst.insert(5)
bst.preOrder();



