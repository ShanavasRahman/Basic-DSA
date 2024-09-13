

//shift

// let arr = [4, 2, 3, 1];
// arr.shift();
// console.log(arr);


//unShift

// let arr = [4, 2, 3, 1];
// arr.unshift(5);
// console.log(arr);


//concat

// let arr = [3, 5];
// let newArr = [6, 7];
// let arrSam=arr.concat(newArr);
// console.log(arrSam);


//slice(starting index(included), ending index(not included))

// let arr = [4, 6, 7, 8, 3, 2, 4, 6];
// let newArr = arr.slice(2, 6);
// console.log(newArr);


//splice(index to start changing, delete count,elements to add)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function reverseArr(arr) {
//     let newArr = arr.splice(2,4);
//     newArr.reverse()
//     arr.splice(2, 0, ...newArr)
//     console.log(arr);
// }
// reverseArr(arr);

// function insertAfter(arr,target,value) {
//     const index = arr.indexOf(target);
//     arr.splice(index+1, 0, value);
//     console.log(arr);
// }

// insertAfter(arr, 3, 10);

// function replaceArray(arr,start,replacement) {
//     arr.splice(start, replacement.length, ...replacement);
//     console.log(arr);
// }

// replaceArray(arr, 2, [45, 67, 78, 34, 53]);

// function splitIntoChunks(arr, size) {
//     let result = []
//     while (arr.length > 0) {
//         result.push(arr.splice(0, size));
//     }
//     console.log(result);
// }

// splitIntoChunks(arr, 3);


// let obj = {
//     a: 10,
//     b: 20,
//     c: 30,
// }
// sum = 0;
// for (let key in obj) {
//     sum = sum + obj[key];
// }

// console.log(sum);

// const promise = new Promise((resolve, reject) => {
//     let a = 0;
//     if (a) {
//         resolve("Hello")
//     } else {
//         reject("rejected")
//     }
// })

promise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error)
})


//Reverse an Array
//Question: How do you reverse the elements of an array in JavaScript?

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = arr.reverse();
// console.log(reversedArr);

// Find the Maximum Value in an Array
// Question: How do you find the maximum value in an array?
let arrr = [10, 20, 30, 5, 40];
let maxVal = Math.max(...arrr);
console.log(maxVal); // Output: 40




// Remove Duplicates from an Array
// Question: How can you remove duplicate elements from an array?

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]









