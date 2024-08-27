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

    search(value) {
        return this.searchNode(this.root,value)
    }

    searchNode(node, value) {
        if (node == null) {
            return null
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return node;
        }
    }
    delete(value) {
        return this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            console.log(node);
            node.left = this.deleteNode(node.left, value);
            return node
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            // if it is a leaf node
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }

            //node has only one child
            if (node.left == null) {
                node = node.right;
                return node
            } else if (node.right == null) {
                node = node.left;
                return node
            }

            //if the node has two children

            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;

            // delete the inorder successor

            node.right = this.deleteNode(node.right, minNode.value)
            return node;
        }


    }


    findMinNode(node) {
        if (node.left == null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    inOrder(node = this.root) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
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
console.log(bst.search(15));
console.log(bst.delete(5))