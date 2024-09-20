//Bubble sort

let arr = [5, 3, 7, 2, 8, 6];

for (let i = 0; i < arr.length; i++){
    for (j = 0; j < arr.length-i; j++){
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
console.log(arr);