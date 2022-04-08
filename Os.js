const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(totalMemory, freeMemory);

const file = require("fs");
const files = file.readdirSync("./");

console.log(files);

file.readdir("yyy", (err, files) => {
    if(err) {
        console.log(err)
    }
    else console.log(files)
})
