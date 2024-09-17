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


// Mid-Square Hashing

function midSquareHash(key) {
    let square = key * key;
    let mid = Math.floor(square / 100) % 100; // Extract the middle two digits
    return mid % 10; // Return as index for table size 10
}

console.log(midSquareHash(45)); // Output: a hash index, e.g., '2'


//Digit Extraction Hashing

function digitExtractionHash(key) {
    let strKey = key.toString();
    let extractedDigits = strKey[0] + strKey[strKey.length - 1]; // Extract first and last digits
    return parseInt(extractedDigits) % 10; // Return hash index
}

console.log(digitExtractionHash(51234)); // Output: '54' -> index '4'


// Random Hashing

function randomHash(key) {
    let randomFactor = Math.random() * 100; // Generate a random factor
    return Math.floor((key + randomFactor) % 10); // Table size 10
}

console.log(randomHash(123)); // Output: Random index each time

//Polynomial Hashing

function polynomialHash(str, base = 31, tableSize = 10) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue * base + str.charCodeAt(i)) % tableSize;
    }
    return hashValue;
}

console.log(polynomialHash("example"));
