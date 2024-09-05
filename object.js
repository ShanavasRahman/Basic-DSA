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

let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
      let parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  console.log(person.fullName); // "John Doe"
  person.fullName = "Jane Smith";
  console.log(person.firstName); // "Jane"
  
  