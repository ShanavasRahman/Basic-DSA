const fs = require('fs');

// fs.writeFile('example.txt', "hai this is shanavas", () => {
//     console.log("file created successfully")
// })

// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data);

// })

// fs.appendFile('example.txt', "this is adding", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("added successfully")
// })

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

fs.writeFile('sample.js',"hello world", (err) =>{
    if(err) {
        console.log(err);
    }
    console.log("file created sucessfully");
})