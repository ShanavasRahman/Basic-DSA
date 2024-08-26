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


class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  rev() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
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

list.insert(10)
list.insert(12)
list.insert(13)
list.insert(15)
list.insert(16);
list.rev()
list.print();