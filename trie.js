class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (let char of prefix) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return true;
    }
  }
  