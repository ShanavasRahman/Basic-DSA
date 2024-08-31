class TrieNode{
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode;
            }
            node = node.children[char];
            // console.log(node);
        }
        node.isEndOfWord = true;
        // console.log(this.root);
    }

}


const trie = new Trie();

trie.insert("apple");
trie.print();
  