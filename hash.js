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
