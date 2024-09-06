// //How do you create an object in JavaScript?

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  

//   What is the this keyword in JavaScript objects, and how is it used? this refers to the object that is executing the current function.

// let person = {
//     name: "John",
//     greet: function() {
//       console.log("Hello, " + this.name);
//     }
//   };
//   person.greet(); // "Hello, John"

//What is the purpose of getters and setters in a JavaScript object? Getters and setters allow you to define methods that control access to an object's properties.

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     },
//     set fullName(name) {
//       let parts = name.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   };
//   console.log(person.fullName); // "John Doe"
//   person.fullName = "Jane Smith";
//   console.log(person.firstName); // "Jane"

//How can you loop through the properties of an object in JavaScript? You can use the for...in loop to iterate through an object's properties.

// let person = { name: "John", age: 30, city: "New York" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

//What is object destructuring in JavaScript, and how does it work? Object destructuring allows you to extract values from an object into variables.
// let person = { name: "John", age: 30, city: "New York" };
// let { name, age, city } = person;
// console.log(name); // "John"
// console.log(age); // 30

//How do you create an object constructor function in JavaScript? You can create a constructor function to define objects of a similar type.
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let person1 = new Person("Alice", 25);
  let person2 = new Person("Bob", 30);
  

// How do you check if a property exists in a JavaScript object? You can use the in operator or the hasOwnProperty() method.
  
// let person = { name: "John", age: 30 };

// // Using 'in' operator
// console.log("name" in person); // true
// console.log("gender" in person); // false

// // Using hasOwnProperty()
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("gender")); // false

// What is the difference between Object.keys(), Object.values(), and Object.entries()?

// Object.keys() returns an array of the object's keys.
// Object.values() returns an array of the object's values.
// Object.entries() returns an array of key-value pairs.


let person = { name: "Alice", age: 25 };

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Alice", 25]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]


  