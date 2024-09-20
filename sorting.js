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



// //Insertion sort
// let arr = [5, 3, 7, 2, 8, 6];

// for (let i = 1; i < arr.length; i++){
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = temp;
// }
// console.log(arr);



//selection sort

let arr = [5, 3, 7, 2, 8, 6];

for (let i = 0; i < arr.length; i++){
    let min = i;
    for (let j = i+1; j < arr.length; j++){
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    [arr[i],arr[min]] = [arr[min], arr[i]];
}
console.log(arr);

//first finding the index of min from the i'th position