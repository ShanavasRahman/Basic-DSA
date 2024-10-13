// class Node{
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList{
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add(data) {
//     const newNode = new Node(data);

//     if (this.head == null) {
//       this.head =this.tail= newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
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
// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4)
// list.add(5)
// list.print();

// class Node {
//   constructor(data) {
//     this.prev = null;
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addData(data) {
//     const newNode = new Node(data);
//     if (this.head == null) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//   }

//   arrayToList(arr) {
//     arr.map((data) => {
//       const newNode = new Node(data);
//       if (this.head == null) {
//         this.head = this.tail = newNode;
//       } else {
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//       }
//     });
//   }
//   addAtfirst(value) {
//     let newNode = new Node(value);
//     let current = this.head;
//     newNode.next = current;
//     this.head = newNode;
//   }
//   addAtlast(value) {
//     let newNode = new Node(value);
//     let current = this.tail;
//     current.next = newNode;
//     this.tail=newNode
//   }

//   removeDuplicate() {
//     let current = this.head;
//     while (current && current.next!=null) {
//       if (current.data == current.next.data) {
//         current.next = current.next.next;
//       }
//       current = current.next;
//     }
//   }

//   delete(element) {
//     let current = this.head;
//     let prev = null;
//     if (current.data === element) {
//       this.head = current.next;
//       return;
//     }
//     while (current) {
//       if (current.data == element) {
//         prev.next = current.next
//         return
//       }
//       prev = current;
//       current=current.next
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

// list.arrayToList([1, 2, 2, 3, 4, 4, 5]);

// list.removeDuplicate();
// list.print()

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((right + left) / 2);
//     if (arr[mid] == target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// }
// const findIndex = binarySearch([2, 3, 4, 5], 2);
// console.log(findIndex);

// const value = "The quick brown fox jumped over the lazy dog";
// function longestString(value) {
//   value = value.split(" ");
//   console.log(value);
//   let longest = " ";
//   for (i = 0; i < value.length; i++) {
//     if (longest.length < value[i].length) {
//       longest = value[i];
//     }
//   }
//   return longest;
// }

// const long = longestString(value);
// console.log(long);


// class Node{
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList{
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const newNode = new Node(data);
//     if (this.head == null) {
//       this.head = newNode
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
//         current=current.next
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

//   sort() {
//     let current = this.head;
//     while (current) {
//       let forward = current.next;
//       while (forward) {
//         if (current.data > forward.data) {
//           let temp = forward.data;
//           forward.data = current.data;
//           current.data = temp;
//         }
//         forward = forward.next;
//       }
//       current=current.next
//     }
//   }

//   delete(target) {
//     let current = this.head;
//     let prev = null;
//     if (this.head.data == target) {
//       this.head = this.head.next;
//       return
//     }
//     while (current) {
//       if (current.data == target) {
//         prev.next = current.next;
//         return
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
// list.prepend(30);
// list.prepend(50);
// list.prepend(10);
// list.prepend(20);
// list.prepend(40);
// list.reverse();
// list.delete(50);
// list.sort()
// list.print();



class Node{
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  deleteDuplicate() {
    let current = this.head;
    while (current) {
      let now = current.next;
      let prev = current;
      while (now) {
        if (current.data == now.data) {
          prev.next = now.next;
        }
        prev = now;
        now = now.next;
      }
      current = current.next;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(2);
list.append(4);
list.append(3);
list.deleteDuplicate();
list.print();

class Graph{
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjList[vertex1] && this.adjList[vertex2]) {
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);
    }
  }
  dfs(startingVertex) {
    let stack = [startingVertex];
    let visited = {}
    visited[startingVertex] = true;
    while (stack.length > 0) {
      let currentVertex = stack.pop();
      console.log(currentVertex);
      this.adjList[currentVertex].forEach(neigbour => {
        if (!visited[neigbour]) {
          visited[neigbour] = true;
          stack.push(neigbour);
        }
      });
    }
  }
  bfs(startingVertex) {
    let queue = [startingVertex];
    let visited = {};
    visited[startingVertex] = true;
    while (queue.length > 0) {
      let currentVertex = queue.shift();
      console.log(currentVertex);
      this.adjList[currentVertex].forEach((neigbour) => {
        if (!visited[neigbour]) {
          visited[neigbour] = true;
          
        }
      })
    }
  }
}