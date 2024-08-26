


class Node{
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
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
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrder(node = this.root) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
    preOrder(node = this.root) {
        if (node != null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node = this.root) {
        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

}


const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.postOrder();