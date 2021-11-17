const fs = require("fs")

// //syncronous (blocking) readFileSync takes file to read as 1st arg
// //2nd arg is the coding of the file and since its text, we use utf-8
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8")

// readFile asynchronously reads the entirety of a file
fs.readFile("./assets/notes.md", "UTF-8", (err, text) => {
  if(err){
    console.log("There was an error reading the contents of the file")
  }

    //logs the text of the file
    console.log(text)
})

