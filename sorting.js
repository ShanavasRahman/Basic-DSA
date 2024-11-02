// Bubble sort

// let arr = [5, 3, 7, 2, 8, 6];

// for (let i = 0; i < arr.length; i++){
//     for (j = 0; j < arr.length-i; j++){
//         if (arr[j] > arr[j+1]) {
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//     }
// }
// console.log(arr);







//selection sort

// let arr = [5, 3, 7, 2, 8, 6];

// for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i+1; j < arr.length; j++){
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     [arr[i],arr[min]] = [arr[min], arr[i]];
// }
// console.log(arr);

// quick sort

// let a = [5, 6, 3, 8, 2];

function quickSort(a) {
    if (a.length <= 1) {
        return a
    }
    let pivot = a[0];
    let left = [];
    let right = [];

    for (let i = 1; i < a.length; i++){
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
    
}

// console.log(quickSort(a));