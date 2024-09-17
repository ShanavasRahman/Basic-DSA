// direct

let directTable = new Array(101);

function directHashStore(id, value) {
    directTable[id] = value;
}

function directHashRetrieve(id) {
    return directTable[id] ? directTable[id] : "Value not found";
}

directHashStore(42, 'Alice');
console.log(directHashRetrieve(42)); // Output: 'Alice'
