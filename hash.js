// Direct Hashing

let directTable = new Array(101);

function directHashStore(id, value) {
    directTable[id] = value;
}

function directHashRetrieve(id) {
    return directTable[id] ? directTable[id] : "Value not found";
}

directHashStore(42, 'Alice');
console.log(directHashRetrieve(42)); // Output: 'Alice'


// Modulus (Division) Hashing
let modTable = new Array(10);

function modHashStore(key, value) {
    let index = key % modTable.length;
    modTable[index] = value;
}

function modHashRetrieve(key) {
    let index = key % modTable.length;
    return modTable[index] ? modTable[index] : "Value not found";
}

modHashStore(123, 'John');
console.log(modHashRetrieve(123)); // Output: 'John'


//Multiplicative Hashing
let multTable = new Array(10);
const A = 0.6180339887; // A constant used for hashing (close to the golden ratio)

function multHashStore(key, value) {
    let index = Math.floor((key * A % 1) * multTable.length);
    multTable[index] = value;
}

function multHashRetrieve(key) {
    let index = Math.floor((key * A % 1) * multTable.length);
    return multTable[index] ? multTable[index] : "Value not found";
}

multHashStore(123, 'Michael');
console.log(multHashRetrieve(123)); // Output: 'Michael'


// Folding Hashing

function foldingHash(key) {
    let strKey = key.toString();
    let sum = 0;

    // Split key into parts and sum
    for (let i = 0; i < strKey.length; i += 2) {
        sum += parseInt(strKey.substr(i, 2), 10);
    }

    return sum % 10; // Table size of 10
}

console.log(foldingHash(123456)); // Output: a hash index, e.g., '8'
