const fs = require('fs');



const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

fs.writeFile('sample.js',"hello world", (err) =>{
    if(err) {
        console.log(err);
    }
    console.log("file created sucessfully");
})