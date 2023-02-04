const fs = require('fs');
const { readFile } = require('fs/promises');

fs.writeFile('asynchronous.txt','New file\n', (e)=>{console.log(e); console.log('file created')});

// fs.mkdir("async_directory", (e)=>{console.log(e)});

fs.appendFile('asynchronous.txt', "I am appended data of asynchronous file", (e)=>{console.log(e)});

const data1 = fs.readFile('asynchronous.txt', 'utf-8',(e,data)=>{console.log(e);console.log(data)});
console.log(data1);

console.log('rrr');

fs.rename("asynchronous.txt", "myFile.txt", () => {
    console.log("Successfully renamed!");
  });