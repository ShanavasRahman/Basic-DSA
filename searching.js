// linear search

function search(arr,target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            return `${target} is in the ${i}th position`
        }
    }
}

let arr = [1, 2, 4, 5];
console.log(search(arr, 5))