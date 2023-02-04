const fs = require('fs');

// fs.mkdirSync("sync_directory")

fs.writeFileSync("syncfile.txt", "Hello I am synchronous file\n");

fs.appendFileSync("syncfile.txt", "Hello I am appended content");

const data = fs.readFileSync("syncfile.txt", "utf-8");

console.log(data);

fs.renameSync('syncfile.txt','renamedfile.txt');
