/**
 * node ships with fs module that can help us list, create, stream, watch, and modify 
 * files and directories.
 * 
 */
const fs = require("fs")

// //reads the contents of the directory and stores in arr syncronistically
// const files = fs.readdirSync("./assets")

// to do this asyncronistically, it doesnt need to set to a variable
// readdir takes two arguments, the directory, and then a callback to execute when it reads dir
    //callback takes two args. 1.handles any errors 2.the files from the dir arr
fs.readdir("./assets", (err, files) => {
  if (err) {
    console.log("there was an error reading the files")
    throw err
  }
  //logs files to console
console.log(files)
})

