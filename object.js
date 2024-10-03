// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// let user = { name: "John", age: 25, city: "Newyork" };
// let entries = Object.entries(user)
// entries=entries.reverse()
// let reversedObj = Object.fromEntries(entries);
// console.log(user)
// console.log(reversedObj);

// let obj = { name: 'hisham', email: 'hisham@gmail.com' }

// function stringify(obj) {
//   let arr1 = [];
//   for (let key in obj) {
//     arr1.push(`${key}=${obj[key]}`);
//   }
//   return arr1.join('&');
// }
// let result=stringify(obj);
// console.log(result);


// let obj1 = { name: "Alice", age: 30 };
// let obj2 = { age: 25, city: "New York" };

// let obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);


// const user = { name: "John", age: 25 };
// let { name, age } = user;
// console.log(name);
// console.log(age);


// let key = "city";
// let obj = {};
// // Use the key variable to dynamically add a "city" property to the object with the value "London".
// obj[key] = "London";

// console.log(obj);


const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: {
        code: 10001,
        country: "USA"
      }
    },
  };




function flatting(obj, parentKey, result) {
    parentKey = parentKey || "";
    result = result || {};

    for (let key in obj) {
        let newKey
            if (parentKey == "") {
                newKey = key;
            } else {
                newKey = parentKey + "." + key;
            }
        
        if (typeof obj[key] == 'object' && obj[key] != null) {
            flatting(obj[key],newKey,result)
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
  
let result = flatting(obj);
console.log(result);




let result = flat(obj);
console.log(result);



