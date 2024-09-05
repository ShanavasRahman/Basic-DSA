// //How do you create an object in JavaScript?

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  

//   What is the this keyword in JavaScript objects, and how is it used? this refers to the object that is executing the current function.

let person = {
    name: "John",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  person.greet(); // "Hello, John"
  