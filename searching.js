// linear search

function search(arr,target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            return `${target} is in the ${i}th position`
        }
    }
}

let arr = [1, 2, 4, 5];
console.log(search(arr, 5));



function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case
    }
    return n * factorialRecursive(n - 1); // Recursive case
  }
  
  console.log(factorialRecursive(5)); // Output: 120
  