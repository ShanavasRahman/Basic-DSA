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
  
    insert(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return current.isEndOfWord;
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
  
    getWords() {
      const words = [];
      this._getWords(this.root, "", words);
      return words;
    }
  
    _getWords(node, prefix, words) {
      if (node.isEndOfWord) {
        words.push(prefix);
      }
      for (let char in node.children) {
        this._getWords(node.children[char], prefix + char, words);
      }
    }
  }
  
  // Usage example
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  
  console.log(trie.search("apple")); // true
  console.log(trie.search("grape")); // false
  console.log(trie.startsWith("app")); // true
  console.log(trie.getWords()); // ["apple", "banana", "orange"]
  