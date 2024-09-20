//Bubble sort

// let arr = [5, 3, 7, 2, 8, 6];

// for (let i = 0; i < arr.length; i++){
//     for (j = 0; j < arr.length-i; j++){
//         if (arr[j] > arr[j+1]) {
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//     }
// }
// console.log(arr);



//Insertion sort
let arr = [5, 3, 7, 2, 8, 6];

for (let i = 1; i < arr.length; i++){
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}
console.log(arr);
